# Dev Portfolio - Setup Guide

This is a modern, single-page portfolio with smooth scroll animations and integrated email functionality.

## Features

✨ **Smooth Scroll Animations** - Using Framer Motion for beautiful entrance animations
📱 **Fully Responsive** - Mobile-first design with responsive navigation
🎨 **Modern Design** - Dark theme with cyan accent colors following a professional developer aesthetic
📧 **Email Integration** - Contact form powered by EmailJS
🔗 **Smooth Navigation** - Single-page with smooth scroll navigation between sections

## Pages & Sections

1. **Home** - Hero section with call-to-action buttons
2. **About** - Profile image, biography, and education timeline
3. **Tech Stack** - Technologies organized in three tabs (Frontend, Backend, Cloud/Tools)
4. **Projects** - Certifications and project showcase with cards
5. **Contact** - Social links, contact form with EmailJS integration

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### 2. Get EmailJS Credentials

1. Visit [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Go to Admin Panel → Add Service
4. Select an email service (Gmail, Outlook, etc.)
5. Copy your **Service ID**
6. Create a new email template and copy the **Template ID**
7. Go to Account Settings and copy your **Public Key**

### 3. Email Template Setup

In EmailJS, create a template with the following variables:
- `from_name` - Visitor's name
- `from_email` - Visitor's email
- `message` - Visitor's message
- `to_email` - Your email address (receiving the message)

Example template content:
```
Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

### 4. Customize Content

Update these files with your information:

- **`components/About.tsx`** - Update profile image URL, bio, and education details
- **`components/Contact.tsx`** - Replace email address in the contact form
- **`components/TechStack.tsx`** - Update technology list
- **`components/Projects.tsx`** - Update certifications and projects
- **`app/layout.tsx`** - Update metadata

### 5. Deployment to Vercel

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add the environment variables in Vercel project settings
4. Deploy!

## Customization

### Colors
The design uses a custom color palette. Update colors in `tailwind.config.ts`:
- Primary: `#c3f5ff` (Cyan)
- Background: `#0b1326` (Dark)
- Secondary: `#b9c8de` (Blue-gray)

### Fonts
Currently using:
- **Headline**: Space Grotesk
- **Body**: Inter

Change fonts in `app/layout.tsx`

### Animations
All animations use Framer Motion. Adjust animation timing in individual component files by modifying:
- `stiffness` - Higher = snappier
- `damping` - Higher = less bouncy
- `delay` - Animation start delay

## Troubleshooting

### Contact form not sending
1. Verify EmailJS credentials in `.env.local`
2. Check that your email service is connected in EmailJS Admin Panel
3. Test the template in EmailJS dashboard
4. Check browser console for error messages

### Images not loading
1. Update image URLs in components (currently using placeholder URLs)
2. For local images, place them in the `public/` folder
3. Update the `Image` component src prop with the correct path

### Animations not working
1. Verify `framer-motion` is installed: `pnpm list framer-motion`
2. Check that components have `'use client'` directive
3. Ensure `whileInView` viewport settings are correct

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Tips

- Images are lazy-loaded by Next.js Image component
- Animations only trigger when in view
- CSS is optimized with Tailwind
- No unnecessary re-renders thanks to proper component structure

## License

Free to use and modify for personal projects.
