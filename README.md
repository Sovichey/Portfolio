# 🚀 Dev Portfolio

A modern, single-page portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and integrated email functionality.

## ✨ Features

- Smooth scroll animations with Framer Motion
- Dark theme with cyan accents
- Responsive mobile-first design
- Functional contact form via EmailJS
- Fast performance with Next.js 16

## 🛠 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion
- **Forms**: React Hook Form, EmailJS
- **Icons**: Lucide React

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Create .env.local with EmailJS credentials
cp .env.local.example .env.local

# Start development server
pnpm dev
```

Visit `http://localhost:3000`

## 📧 EmailJS Setup

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add a service (Gmail, Outlook, etc.)
3. Create an email template with variables: `from_name`, `from_email`, `message`
4. Update `.env.local` with your Service ID, Template ID, and Public Key

## ✏️ Customization

- **About**: Edit `components/About.tsx` (profile image, bio, education)
- **Tech Stack**: Edit `components/TechStack.tsx` (technologies, categories)
- **Projects**: Edit `components/Projects.tsx` (project details, links)
- **Colors**: Update `tailwind.config.ts` (primary, background, secondary)

## ⏳ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   └── projects/
│       └── [slug]/page.tsx # Dynamic project pages
├── components/
│   ├── Navbar.tsx, Hero.tsx, About.tsx
│   ├── TechStack.tsx, Projects.tsx, Contact.tsx
│   ├── Footer.tsx, theme-provider.tsx
│   └── ui/                 # Reusable UI components
├── hooks/                  # Custom hooks
├── lib/                    # Utilities & data
├── public/                 # Static assets
└── styles/                 # Global styles
```

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect repository at [vercel.com](https://vercel.com)
3. Add environment variables in Settings
4. Deploy!
   │ ├── Contact.tsx # Contact form
   │ └── Footer.tsx # Footer
   ├── lib/
   │ └── emailConfig.ts # EmailJS configuration
   ├── tailwind.config.ts # Tailwind theme
   └── .env.local.example # Environment template

````

### Available Scripts

```bash
# Development
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
````

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📚 Documentation Files

- **SETUP.md** - Detailed setup instructions
- **.env.local.example** - Environment variables template
- **README.md** - This file

## ⚡ Performance

- Optimized images with Next.js Image component
- Animations only trigger when in viewport
- CSS is minified and tree-shaken by Tailwind
- Proper code splitting and lazy loading
- Lighthouse score 90+ 🎯

## 🤝 Troubleshooting

### Contact form not working?

1. Check `.env.local` has all EmailJS variables
2. Verify service is connected in EmailJS dashboard
3. Test template in EmailJS console
4. Check browser console for errors

### Images not loading?

1. Replace placeholder URLs with real image URLs
2. For local images, place in `public/` folder
3. Use `/filename.jpg` as the src

### Animations not smooth?

1. Verify Framer Motion is installed: `pnpm list framer-motion`
2. Check components have `'use client'` directive
3. Ensure viewport settings are correct in `whileInView`

## 📄 License

Free to use and modify for personal projects.

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [EmailJS Docs](https://www.emailjs.com/docs)
- [React Documentation](https://react.dev)

---

**Ready to showcase your skills?** Update the content and deploy! 🚀

For issues or questions, check the SETUP.md file for detailed guidance.
