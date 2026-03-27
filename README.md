# Lemonade Bloom Haul Away - Website

A premium, modern, fully static website for a professional junk removal and hauling business. Built with React, Tailwind CSS, and designed for seamless deployment on Netlify.

## Overview

This is a high-converting service website featuring:

- **Premium Design**: Deep green and soft blue color palette with elegant serif headings and clean sans-serif body text
- **Fully Static**: No backend required, optimized for Netlify deployment
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Trust-Building**: Testimonials, before/after galleries, team showcase, and clear CTAs
- **Booking Integration**: Google Calendar integration for appointment scheduling
- **Contact Form**: Google Forms embed for customer inquiries
- **SEO-Optimized**: Semantic HTML, proper meta tags, and structured content

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: shadcn/ui
- **Routing**: Wouter (client-side routing)
- **Build Tool**: Vite
- **Deployment**: Netlify (static hosting)

## Project Structure

```
client/
├── public/              # Static files (favicon, robots.txt)
├── src/
│   ├── pages/          # Page components (Home.tsx)
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts (ThemeContext)
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # React entry point
│   └── index.css       # Global styles with design tokens
├── index.html          # HTML entry point
└── package.json        # Dependencies and scripts
```

## Design Philosophy

**Premium Eco-Conscious Minimalism** - The website embodies a clean, modern aesthetic inspired by high-end cleaning and service brands. The design prioritizes trust, cleanliness, and transformation through:

- **Color Palette**: Deep green (#2F6F5E) primary, soft blue (#3A7CA5) secondary, white/light gray backgrounds
- **Typography**: Playfair Display serif for headings (elegant, premium), Montserrat sans-serif for body (modern, readable)
- **Layout**: Ample whitespace, asymmetric designs, generous padding between sections
- **Interactions**: Smooth animations, hover effects, floating CTAs
- **Trust Elements**: Testimonials, before/after visuals, team photos, clear value propositions

## Getting Started

### Development

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
pnpm build
```

This generates optimized static files in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## Deployment to Netlify

### Option 1: Direct Netlify Deployment (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist/public`
4. Deploy!

### Option 2: Manual Deployment

1. Build the project:
```bash
pnpm build
```

2. Upload the `dist/public` folder to Netlify via drag-and-drop

## Key Features

### Hero Section
- Full-width background image with overlay
- Strong call-to-action button
- Sticky navigation header

### Services Overview
- Four service cards with icons
- Hover effects and smooth transitions
- Clear descriptions of offerings

### Before & After Gallery
- Dramatic transformation imagery
- Visual proof of service quality

### Testimonials
- Customer quotes with 5-star ratings
- Trust-building social proof

### Trust Badges
- Key statistics (1000+ customers, 100% eco-friendly, etc.)
- Reassurance of quality and reliability

### Booking Section
- Google Calendar integration for appointment scheduling
- 1-hour time slots with automatic spacing
- Direct phone number link

### Contact Section
- Google Forms embed for inquiries
- Multiple contact methods (phone, email, location)
- Professional, integrated design

## Customization

### Colors
Edit CSS variables in `client/src/index.css`:
```css
--primary: #2F6F5E;        /* Deep green */
--secondary: #3A7CA5;      /* Soft blue */
--background: #FFFFFF;     /* White */
```

### Fonts
Google Fonts are loaded in `client/index.html`:
- Playfair Display (headings)
- Montserrat (body)

### Images
All images are stored as CDN URLs. To update:
1. Generate or source new images
2. Upload to CDN
3. Update image URLs in `Home.tsx`

### Contact Email
Update the contact form destination in `Home.tsx`:
- Current: `LemonadeBloom@gmail.com`
- Update the Google Form embed src to point to your form

## Performance Optimization

- Images are optimized and served via CDN
- CSS and JavaScript are minified
- Lazy loading for below-the-fold content
- Fast page load times optimized for Netlify

## SEO

- Semantic HTML structure
- Proper meta tags (title, description, theme-color)
- Heading hierarchy (H1, H2, H3)
- Alt text on all images
- Open Graph ready (can be added)

## Accessibility

- WCAG AA contrast compliance
- Keyboard navigation support
- Focus indicators on all interactive elements
- Semantic HTML for screen readers
- Proper heading structure

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Adding New Sections
1. Create a new component in `client/src/components/`
2. Import and use in `Home.tsx`
3. Follow the design system (colors, typography, spacing)

### Updating Content
- Edit text directly in `Home.tsx`
- Update images by replacing CDN URLs
- Modify colors in `index.css` CSS variables

### Analytics
Analytics tracking is configured via environment variables:
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

## Deployment Checklist

- [ ] Update company name and branding
- [ ] Replace placeholder images with real photos
- [ ] Update contact email and phone number
- [ ] Configure Google Calendar for bookings
- [ ] Set up Google Form for contact submissions
- [ ] Test all links and CTAs
- [ ] Test on mobile devices
- [ ] Verify form submissions work
- [ ] Set up custom domain (optional)
- [ ] Enable SSL/HTTPS
- [ ] Configure analytics

## Support & Customization

For questions or custom modifications:
- Review the DESIGN_GUIDE.md for design philosophy
- Check the component structure in `client/src/`
- Refer to Tailwind CSS documentation for styling
- Consult React documentation for component logic

## License

All rights reserved. This website is proprietary to Lemonade Bloom Haul Away.

---

**Built with ❤️ for Lemonade Bloom Haul Away**
