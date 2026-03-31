type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalStore = globalThis as typeof globalThis & {
  __blueoxRateLimitStore?: Map<string, RateLimitEntry>;
};

const rateLimitStore = globalStore.__blueoxRateLimitStore ?? new Map<string, RateLimitEntry>();
globalStore.__blueoxRateLimitStore = rateLimitStore;

const SEARCH_CRAWLERS = [
  'googlebot',
  'bingbot',
  'duckduckbot',
  'slurp',
  'baiduspider',
  'yandexbot',
  'applebot',
  'googleother',
  'google-inspectiontool'
];

const SCRAPER_UA_SIGNATURES = [
  'python-requests',
  'python-urllib',
  'curl/',
  'wget/',
  'httpclient',
  'scrapy',
  'aiohttp',
  'go-http-client',
  'node-fetch',
  'axios/',
  'postmanruntime',
  'headlesschrome',
  'phantomjs',
  'selenium',
  'playwright',
  'puppeteer'
];

export function isSearchCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return SEARCH_CRAWLERS.some((crawler) => ua.includes(crawler));
}

export function isLikelyScraperUserAgent(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return SCRAPER_UA_SIGNATURES.some((signature) => ua.includes(signature));
}

export function getClientIp(headers: Headers): string {
  const xff = headers.get('x-forwarded-for');
  if (xff) {
    return xff.split(',')[0].trim();
  }
  return headers.get('x-real-ip') || headers.get('cf-connecting-ip') || 'unknown';
}

export function checkRateLimit(key: string, limit: number, windowMs: number): { ok: boolean; remaining: number; retryAfter: number } {
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);

  const ok = existing.count <= limit;
  const remaining = Math.max(0, limit - existing.count);
  const retryAfter = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));

  if (rateLimitStore.size > 10000) {
    for (const [entryKey, entryValue] of rateLimitStore.entries()) {
      if (entryValue.resetAt <= now) {
        rateLimitStore.delete(entryKey);
      }
    }
  }

  return { ok, remaining, retryAfter };
}
