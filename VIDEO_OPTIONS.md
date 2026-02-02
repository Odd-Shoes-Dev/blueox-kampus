# Video Background Options

## Current Implementation: YouTube Embeds
- Hero: https://youtu.be/JUApsTgSYtQ (AI/VR content)
- Academy: https://youtu.be/5lNZjtubMS4 (Training content)

## Alternative: Direct Video URLs
If YouTube embeds don't work well, you can use these direct video URLs:

### Free Stock Video Sources:
```html
<!-- AI/Tech Background Videos -->
<source src="https://player.vimeo.com/external/[video-id].mp4" type="video/mp4" />

<!-- Or use Pexels/Pixabay direct links -->
<source src="https://cdn.pixabay.com/vimeo/[video-id]/[video-name].mp4" type="video/mp4" />
```

### YouTube to MP4 Conversion:
1. Use tools like `yt-dlp` or online converters to download YouTube videos as MP4
2. Place them in `/public/assets/videos/` folder
3. The original video tags will work automatically

## Current Issues Fixed:
- YouTube embeds configured with autoplay, mute, loop
- Scaled slightly to hide YouTube branding
- Opacity set to 20% for subtle background effect
- Fallback gradient overlays maintained