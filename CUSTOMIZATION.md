# 🎨 Customization Guide

## Content Updates

### 1. Hero Section (Home)
**File:** `components/Hero.tsx`

Update the headline and description:
```tsx
<motion.h1>
  Full-Stack Engineer & Systems Architect
</motion.h1>

<motion.p>
  Building robust, scalable applications...
</motion.p>
```

### 2. About Section
**File:** `components/About.tsx`

- **Profile Image** (line ~65):
  ```tsx
  <Image
    src="https://your-image-url.jpg"  // Replace URL
    alt="Profile"
  />
  ```

- **Bio Text** (line ~85):
  ```tsx
  <p>I am a full-stack engineer...</p>
  ```

- **Education** (line ~34-40):
  ```tsx
  const education = [
    {
      year: '2021 — 2025',
      degree: 'Your Degree',
      school: 'Your School',
      gpa: '3.92',
      skills: ['Skill 1', 'Skill 2']
    }
  ]
  ```

### 3. Tech Stack
**File:** `components/TechStack.tsx`

Update technologies in the `technologies` object (lines ~15-46):

```tsx
const technologies = {
  frontend: [
    { 
      name: 'React',
      category: 'Framework',
      icon: '⚛️',
      tags: ['Hooks', 'DOM'] 
    },
    // Add more...
  ],
  backend: [...],
  cloud: [...]
}
```

### 4. Projects/Certifications
**File:** `components/Projects.tsx`

Update certifications array (line ~13):
```tsx
const certifications = [
  {
    icon: '💻',
    id: 'CERT-001',
    title: 'Certification Name',
    description: 'What you learned...',
    link: 'https://verify-link.com'
  }
]
```

### 5. Contact Information
**File:** `components/Contact.tsx`

- **Social Links** (line ~13):
  ```tsx
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/yourprofile' },
    // Add your actual links
  ]
  ```

- **Recipient Email** (in `.env.local`):
  ```env
  NEXT_PUBLIC_RECIPIENT_EMAIL=your-actual-email@example.com
  ```

## Design Customization

### Colors
**File:** `tailwind.config.ts`

Update the colors object (line ~11):
```ts
colors: {
  primary: "#c3f5ff",           // Main accent (cyan)
  background: "#0b1326",        // Dark background
  secondary: "#b9c8de",         // Secondary color
  surface: "#171f33",           // Card backgrounds
  "on-surface": "#dae2fd",      // Text color
  // ... more colors
}
```

### Font Families
**File:** `app/layout.tsx`

Change fonts (line ~4-5):
```tsx
import { Inter, YourFont } from 'next/font/google'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const yourFont = YourFont({ subsets: ["latin"], variable: '--font-space-grotesk' })
```

Then update `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ["var(--font-inter)"],
  mono: ["var(--font-your-font)"],
}
```

### Spacing
**File:** `tailwind.config.ts`

Update spacing scale (line ~94):
```ts
spacing: {
  unit: "8px",
  "stack-sm": "16px",
  "stack-md": "32px",
  "stack-lg": "64px",
  gutter: "24px",
}
```

### Animations
Adjust animation timing in component files:

```tsx
// Increase stiffness for snappier animations
transition: {
  type: 'spring',
  stiffness: 150,  // Was 100
  damping: 15,
}

// Adjust delay for stagger effect
transition: {
  staggerChildren: 0.3,  // Was 0.2
  delay: 0.1,
}
```

## Structural Changes

### Add New Section
1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add to Navbar navigation in `components/Navbar.tsx`
4. Add scroll anchor `id="section-name"`

Example:
```tsx
// components/Portfolio.tsx
'use client'
import { motion } from 'framer-motion'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-8">
      {/* Your content */}
    </section>
  )
}
```

Then in `app/page.tsx`:
```tsx
import { Portfolio } from '@/components/Portfolio'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />  {/* Add here */}
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
```

And in `components/Navbar.tsx`:
```tsx
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },  // Add here
  // ...
]
```

### Change Page Title & Meta
**File:** `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Your Name - Dev Portfolio',
  description: 'Your custom description here',
  // ...
}
```

## Form Customization

### Add Form Fields
**File:** `components/Contact.tsx`

1. Add field to state:
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
  phone: '',  // Add new field
})
```

2. Add input in form:
```tsx
<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleInputChange}
  placeholder="Your phone number"
/>
```

3. Update EmailJS template to include `phone` variable

## Mobile Customization

### Responsive Breakpoints
Tailwind uses these defaults (in `tailwind.config.ts`):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Use in components:
```tsx
<div className="md:grid-cols-2 lg:grid-cols-4">
  {/* 1 column on mobile, 2 on tablet, 4 on desktop */}
</div>
```

### Mobile Menu
Already customized in `components/Navbar.tsx`. Adjust breakpoint:
```tsx
<div className="hidden md:flex">  {/* Change 'md' to 'lg' for different breakpoint */}
```

## Advanced Customization

### Add Third-Party Scripts
```tsx
// In app/layout.tsx
<script async src="https://example.com/script.js" />
```

### Add Analytics
```tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Add Dark Mode Toggle
Tailwind is already set to dark mode. To add toggle:
1. Install `next-themes`: `pnpm add next-themes`
2. Add provider in layout
3. Create theme toggle button

### Custom Fonts
Replace Google Fonts in `app/layout.tsx`:
```tsx
import { Playfair_Display, Poppins } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"] })
```

## Testing Changes Locally

```bash
# Development mode (hot reload)
pnpm dev

# Build and test production
pnpm build
pnpm start
```

## Common Issues

**Styles not applying?**
- Run `pnpm dev` to rebuild CSS
- Check class names match Tailwind syntax
- Verify Tailwind config includes component file

**Images broken?**
- Check image URLs are accessible
- For local images, place in `public/` folder
- Use relative paths like `/image.jpg`

**Animations not working?**
- Verify component has `'use client'` at top
- Check viewport settings in `whileInView`
- Ensure Framer Motion is installed

## Deployment Considerations

When deploying to Vercel:
1. Add all `.env.local` variables in project settings
2. Update image URLs to absolute URLs (not localhost)
3. Test contact form before deploying
4. Verify all social links are correct

---

For more help, check `README.md` and `SETUP.md`! 🎉
