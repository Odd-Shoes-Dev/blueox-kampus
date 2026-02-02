# Assets Directory Structure

## Required Video Files
For the immersive AI/VR experience, please add these video files:

### `/assets/videos/`
- `ai-vr-bg.mp4` - Main hero background video (1920x1080, 10-30 seconds loop)
- `vr-training.mp4` - VR Academy training footage (1080x1080, 15-45 seconds loop)
- `simulation-demo.mp4` - Tech spotlight simulation demo (720x480, 20 seconds loop)

### Video Specifications
- **Format**: MP4 (H.264 codec)
- **Quality**: High quality, optimized for web
- **Size**: Keep under 10MB per video for fast loading
- **Loop**: Seamless looping recommended
- **Audio**: Muted (videos are set to autoplay muted)

### Fallback Images
Current Unsplash images serve as fallbacks if videos are not available.

## Current Images
### `/assets/images/`
- `logo.png` - Main logo (used in manifest, favicon, etc.)
- `logo_name.png` - Logo with text (used in header)

## Video Sources Ideas
- AI/VR training footage
- Welding simulation recordings
- Medical VR training scenes
- Industrial automation demos
- Abstract tech backgrounds with particles/neurons
- Uganda kampus footage

## Performance Notes
- Videos are loaded with `loading="lazy"` equivalent
- Opacity reduced (20-80%) for background videos
- GPU-accelerated CSS animations for smooth performance
- Responsive breakpoints hide heavy animations on mobile
