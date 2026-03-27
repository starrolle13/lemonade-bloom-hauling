# Lemonade Bloom Haul Away - Design Guide

## Design Philosophy: Premium Eco-Conscious Minimalism

This website embodies a **premium, modern, eco-friendly aesthetic** inspired by high-end cleaning and service brands. The design prioritizes trust, cleanliness, and transformation through careful use of color, typography, and whitespace.

---

## Color Palette

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Deep Green** | #2F6F5E | Primary brand color, buttons, accents | Growth, eco-friendly, trustworthy |
| **Soft Blue** | #3A7CA5 | Secondary accents, highlights | Calm, professional, reliable |
| **White** | #FFFFFF | Primary background | Clean, minimal, premium |
| **Light Gray** | #F5F5F5 | Secondary background, sections | Subtle contrast, sophistication |
| **Dark Text** | #1A1A1A | Body text, headings | Readability, sophistication |
| **Accent Blue** | #5B9FBF | Hover states, subtle highlights | Complementary to palette |

---

## Typography System

### Headings: Elegant Serif (Playfair Display)
- **Usage**: H1, H2, H3, page titles, section headers
- **Weight**: 700 (Bold) for main headings, 600 for subheadings
- **Characteristics**: Elegant, premium, sophisticated
- **Emotion**: Luxury, trustworthiness, established authority

### Body: Clean Sans-Serif (Montserrat)
- **Usage**: Body text, descriptions, CTAs, labels
- **Weight**: 400 (Regular) for body, 600 for emphasis
- **Characteristics**: Modern, clean, highly readable
- **Emotion**: Contemporary, professional, approachable

---

## Layout & Spacing

- **Hero Section**: Full-width, high-impact image with overlay text
- **Content Sections**: Max-width 1200px, centered, generous padding
- **Whitespace**: Ample spacing between sections (80-120px vertical padding)
- **Grid**: 12-column responsive grid, mobile-first approach
- **Asymmetry**: Avoid centered layouts where possible; use offset designs for visual interest

---

## Visual Elements

### Logo
- Leaf + truck icon symbolizing eco-friendly hauling
- Deep green primary, soft blue accent
- Minimal, geometric, works at all sizes

### Images
- **Hero**: Bright, organized spaces after transformation
- **Before/After**: Dramatic transformation showing impact
- **Team**: Professional, diverse, trustworthy
- **Lifestyle**: Natural daylight, modern interiors, greenery

### Buttons & CTAs
- **Primary**: Deep green background (#2F6F5E), white text
- **Secondary**: Soft blue background (#3A7CA5), white text
- **Hover**: Slight darkening, smooth transition
- **Padding**: Generous (16px vertical, 32px horizontal)
- **Border Radius**: 6px (subtle, not overly rounded)

---

## Micro-Interactions & Animations

- **Fade-in**: Sections fade in on scroll (200-300ms)
- **Hover Effects**: Buttons scale slightly (1.02x), smooth color transitions
- **Smooth Scrolling**: Enabled for all anchor links
- **Floating CTA**: Sticky "Book Now" button appears on scroll
- **Transitions**: All animations use ease-in-out timing (300ms default)

---

## Trust & Credibility Elements

- **Testimonials**: Real customer quotes with names/photos
- **Before/After Gallery**: Visual proof of transformation
- **Team Section**: Professional photos of diverse team
- **Trust Badges**: Service guarantees, eco-friendly certifications
- **Clear CTAs**: Prominent "Book Now" buttons throughout

---

## Mobile-First Responsive Design

- **Mobile**: Single column, full-width sections, touch-friendly buttons (48px min height)
- **Tablet**: 2-column layouts where appropriate
- **Desktop**: Full 3-4 column layouts, enhanced spacing
- **Breakpoints**: 640px (mobile), 1024px (tablet), 1280px (desktop)

---

## Accessibility & Performance

- **Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
- **Typography**: Font sizes: 16px (body), 24px (h3), 32px (h2), 48px (h1)
- **Focus States**: Visible focus rings on all interactive elements
- **Images**: All images have descriptive alt text
- **Performance**: Optimized images, lazy loading for below-the-fold content
- **SEO**: Semantic HTML, proper heading hierarchy, meta tags

---

## Brand Voice & Messaging

- **Tone**: Professional yet approachable, trustworthy, solution-focused
- **Messaging**: Emphasize transformation, cleanliness, reliability, eco-friendliness
- **CTAs**: Action-oriented ("Book Your Haul Away", "Get Your Space Clean Today")
- **Testimonials**: Focus on transformation and peace of mind

---

## Implementation Notes

- Use CSS variables for all colors to maintain consistency
- Implement smooth transitions on all interactive elements
- Ensure all images are optimized for web (compressed, appropriate formats)
- Use semantic HTML for accessibility and SEO
- Test on multiple devices and browsers before deployment
