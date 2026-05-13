# 🚀 Dev Portfolio

A modern, single-page developer portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. Features smooth scroll animations, responsive design, and integrated email functionality via EmailJS.

## ✨ Features

- **Single-Page Application** - All sections on one page with smooth scroll navigation
- **Smooth Animations** - Beautiful entrance animations using Framer Motion
- **Responsive Design** - Mobile-first approach with responsive navigation
- **Dark Theme** - Professional dark theme with cyan accents
- **Contact Form** - Fully functional email integration with EmailJS
- **Professional Design** - Based on technical portfolio best practices
- **Fast Performance** - Built with Next.js 16 and Turbopack

## 📑 Portfolio Sections

1. **Home (Hero)** - Welcome section with CTA buttons
2. **About** - Profile image, biography, and education timeline
3. **Tech Stack** - Technologies organized by category (3 tabs)
   - Frontend: React, TypeScript, Tailwind, Next.js, etc.
   - Backend: Node.js, Python, PostgreSQL, Docker, etc.
   - Cloud/Tools: AWS, Vercel, GitHub Actions, Kubernetes, etc.
4. **Projects** - Certifications and project showcase cards
5. **Contact** - Social links and contact form with EmailJS

## 🛠 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: EmailJS
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk from Google Fonts

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone <your-repo> portfolio
cd portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

Then update with your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template
NEXT_PUBLIC_RECIPIENT_EMAIL=your-email@example.com
```

### 4. Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

### Getting EmailJS Credentials

1. Go to [emailjs.com](https://www.emailjs.com) and sign up (free tier available)
2. **Add Service**: Admin Panel → Add Service → Choose provider (Gmail, Outlook, etc.)
3. **Get Service ID**: Copy from your service settings
4. **Create Template**: Create an email template with these variables:
   - `from_name` - Visitor's name
   - `from_email` - Visitor's email
   - `message` - Visitor's message
   - `to_email` - Your receiving email
5. **Get Template ID**: Copy your template ID
6. **Get Public Key**: Account Settings → API Keys → Copy Public Key

### Example EmailJS Template

```html
<h2>New Portfolio Message</h2>
<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<hr>
<p>{{message}}</p>
```

## ✏️ Customization

### Update Your Information

**About Section** (`components/About.tsx`)
- Update profile image URL
- Modify biography text
- Add your actual education details

**Tech Stack** (`components/TechStack.tsx`)
- Add/remove technologies
- Update technology categories
- Modify skill tags

**Projects** (`components/Projects.tsx`)
- Replace certification details
- Add project information
- Update verify links

**Contact Info** (`components/Contact.tsx`)
- Update social media links
- Add your email address
- Customize form fields if needed

**Colors & Design** (`tailwind.config.ts`)
```ts
primary: "#c3f5ff",      // Cyan
background: "#0b1326",   // Dark
secondary: "#b9c8de"     // Blue-gray
```

### Animation Customization

All animations use Framer Motion. Adjust timing in component files:

```tsx
transition: {
  type: 'spring',
  stiffness: 100,      // Higher = snappier
  damping: 15,         // Higher = less bouncy
  delay: 0.2           // Delay in seconds
}
```

## 📱 Responsive Design

- **Mobile**: Full-screen optimized, hamburger menu
- **Tablet**: 2-column grid layouts
- **Desktop**: 3-4 column grids with full navigation

## 🎨 Design System

### Color Palette
- **Primary**: #c3f5ff (Cyan)
- **Background**: #0b1326 (Dark)
- **Secondary**: #b9c8de (Blue-gray)
- **Surface**: #171f33 (Darker blue)
- **Text**: #dae2fd (Light gray)

### Typography
- **Headlines**: Space Grotesk (bold, modern)
- **Body**: Inter (readable, clean)

### Spacing Scale
- unit: 8px
- stack-sm: 16px
- stack-md: 32px
- stack-lg: 64px
- gutter: 24px

## 🚀 Deployment to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Settings
   - Deploy!

## 🔧 Development

### Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Home section
│   ├── About.tsx           # About & education
│   ├── TechStack.tsx       # Technologies (tabbed)
│   ├── Projects.tsx        # Certifications
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── lib/
│   └── emailConfig.ts      # EmailJS configuration
├── tailwind.config.ts      # Tailwind theme
└── .env.local.example      # Environment template
```

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
```

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
