# Blue OX Kampus - Custom Brand Design System

## Overview
This is the exclusive brand design system for Blue OX Kampus, featuring custom fonts, buttons, icons, and visual elements that create a unique identity.

---

## 🎨 Custom Fonts

### Primary Fonts
1. **Orbitron** - Bold, futuristic headings
   - Usage: Main headings, hero text, stats
   - Weights: 400, 500, 600, 700, 800, 900
   - Class: `.blueox-heading`

2. **Rajdhani** - Modern, industrial body text
   - Usage: Body text, subheadings, descriptions
   - Weights: 400, 500, 600, 700
   - Class: `.blueox-subheading` or `.blueox-body`

3. **Space Mono** - Technical, monospace
   - Usage: Stats, badges, technical labels
   - Weights: 400, 700
   - Class: `.blueox-mono`

---

## 🎯 Custom Button Styles

### Primary Button
```jsx
<button className="blueox-btn blueox-btn-primary">
  <i className="fas fa-rocket"></i>
  Launch Button
</button>
```
- Coral red gradient with hover glow
- Best for: Primary CTAs, main actions

### Secondary Button
```jsx
<button className="blueox-btn blueox-btn-secondary">
  <i className="fas fa-info-circle"></i>
  Learn More
</button>
```
- Transparent with coral red border
- Best for: Secondary actions, navigation

### Tech Button
```jsx
<button className="blueox-btn blueox-btn-tech">
  <i className="fas fa-code"></i>
  Enter VR Mode
</button>
```
- Cyan/blue tech aesthetic with glow
- Best for: Technical features, VR/AI actions

---

## 🔷 Custom Icon Containers

```jsx
<div className="blueox-icon">
  <i className="fas fa-brain text-[#ff4040]"></i>
</div>
```
- Animated gradient border on hover
- Rotates and scales on interaction
- Best for: Feature cards, service highlights

---

## 🏷️ Custom Badges

```jsx
<div className="blueox-badge">
  Live Training
</div>
```
- Animated pulse dot
- Gradient background
- Best for: Status indicators, tags, labels

---

## 🎴 Custom Cards

```jsx
<div className="blueox-card">
  <h3 className="blueox-subheading">Card Title</h3>
  <p className="blueox-body">Card content goes here</p>
</div>
```
- Hover animation with glowing border
- Animated top gradient line
- Best for: Features, services, testimonials

---

## 📊 Custom Stats/Numbers

```jsx
<div className="blueox-stat">250+</div>
<div className="blueox-mono text-xs">Students Trained</div>
```
- Large gradient numbers (coral red to cyan)
- Perfect for: Statistics, achievements, metrics

---

## 〰️ Custom Divider

```jsx
<div className="blueox-divider"></div>
```
- Horizontal gradient line
- Best for: Section separators

---

## 🎨 Color Palette

### Primary Colors
- **Coral Red**: `#ff4040` - Main brand color
- **Coral Red Light**: `#ff6060` - Gradients, accents
- **Cyan**: `#00d9ff` - Tech accent, secondary highlights

### Background Colors
- **Black**: `#000000` - Primary background
- **Dark Blue**: `#1a1a2e`, `#16213e` - Tech elements

### Border/Glow Colors
- Use `rgba(255, 64, 64, 0.2)` for subtle coral red glows
- Use `rgba(0, 217, 255, 0.3)` for tech/cyan glows

---

## 💡 Usage Examples

### Example 1: Feature Section
```jsx
<section className="py-20">
  <h2 className="blueox-heading text-4xl text-center mb-12">
    Our Features
  </h2>
  
  <div className="grid grid-cols-3 gap-6">
    <div className="blueox-card">
      <div className="blueox-icon mb-4">
        <i className="fas fa-vr-cardboard text-[#ff4040]"></i>
      </div>
      <h3 className="blueox-subheading text-xl mb-2">VR Training</h3>
      <p className="blueox-body text-gray-400">
        Industry-grade simulation training
      </p>
    </div>
  </div>
</section>
```

### Example 2: CTA Section
```jsx
<section className="text-center py-16">
  <div className="blueox-badge mb-6">
    Limited Spots Available
  </div>
  
  <h2 className="blueox-heading text-5xl mb-6">
    Join Blue OX <span className="gradient-text-3d">Today</span>
  </h2>
  
  <div className="flex gap-4 justify-center">
    <button className="blueox-btn blueox-btn-primary">
      <i className="fas fa-rocket"></i>
      Apply Now
    </button>
    <button className="blueox-btn blueox-btn-secondary">
      <i className="fas fa-calendar"></i>
      Book Tour
    </button>
  </div>
</section>
```

### Example 3: Stats Display
```jsx
<div className="flex gap-8 justify-center">
  <div className="text-center">
    <div className="blueox-stat">95%</div>
    <div className="blueox-mono text-sm text-gray-400">
      Success Rate
    </div>
  </div>
  
  <div className="text-center">
    <div className="blueox-stat">500+</div>
    <div className="blueox-mono text-sm text-gray-400">
      Graduates
    </div>
  </div>
</div>
```

---

## 🚀 Getting Started

1. **Typography**: Replace generic headings with `.blueox-heading` or `.blueox-subheading`
2. **Buttons**: Replace standard buttons with `.blueox-btn` variants
3. **Icons**: Wrap FontAwesome icons in `.blueox-icon` containers
4. **Cards**: Use `.blueox-card` instead of generic `.glass` for feature cards
5. **Stats**: Use `.blueox-stat` for all numerical displays

---

## ✅ Brand Consistency Checklist

- [ ] All main headings use `blueox-heading` class
- [ ] All CTA buttons use `blueox-btn-primary`
- [ ] Stats/numbers use `blueox-stat` class
- [ ] Icons wrapped in `blueox-icon` containers
- [ ] Status badges use `blueox-badge` class
- [ ] Feature cards use `blueox-card` class
- [ ] Body text uses Rajdhani font family
- [ ] Technical labels use Space Mono font

---

## 📝 Notes

- All animations are GPU-accelerated for smooth performance
- Hover effects provide visual feedback on interactive elements
- Gradient combinations (coral red → cyan) create the signature Blue OX look
- Font weights are carefully chosen for optimal hierarchy and readability

---

**Updated:** February 5, 2026
**Version:** 1.0
