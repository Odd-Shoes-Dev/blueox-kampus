import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp, isLikelyScraperUserAgent, isSearchCrawler } from './lib/security';

function shouldBypass(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/icons') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldBypass(pathname)) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get('user-agent') || '';
  const isCrawler = isSearchCrawler(userAgent);

  if (!isCrawler && isLikelyScraperUserAgent(userAgent)) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    return new NextResponse('Forbidden', { status: 403 });
  }

  const ip = getClientIp(request.headers);
  const apiLimit = checkRateLimit(`mw:api:${ip}:${pathname}`, 40, 60_000);
  const pageLimit = checkRateLimit(`mw:page:${ip}`, 240, 60_000);

  if (pathname.startsWith('/api/') && !isCrawler && !apiLimit.ok) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(apiLimit.retryAfter) } }
    );
  }

  if (!pathname.startsWith('/api/') && !isCrawler && !pageLimit.ok) {
    return new NextResponse('Too many requests', {
      status: 429,
      headers: { 'Retry-After': String(pageLimit.retryAfter) }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)']
};
