# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies
```bash
pnpm install
```

## Step 2: Setup EmailJS (Optional but Recommended)

### Create `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_RECIPIENT_EMAIL=your-email@example.com
```

**Don't have EmailJS?**
1. Go to https://www.emailjs.com
2. Sign up (free)
3. Add a service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy your credentials to `.env.local`

Full instructions: See `SETUP.md`

## Step 3: Update Your Content

Quick edits needed:

**`components/About.tsx` (line 65)**
- Update profile image URL
- Change bio text

**`components/TechStack.tsx`**
- Update tech list if needed

**`components/Projects.tsx`**
- Update certification info

**`components/Contact.tsx`**
- Update social media links
- Update your email

## Step 4: Run
```bash
pnpm dev
```

Visit http://localhost:3000

## Step 5: Deploy

```bash
# Push to GitHub
git add .
git commit -m "Portfolio ready"
git push origin main

# Then connect to Vercel:
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Add .env variables
# 4. Deploy!
```

## What's Included?

✅ Single-page portfolio  
✅ Smooth scroll animations  
✅ Responsive mobile design  
✅ Contact form with EmailJS  
✅ Dark theme with cyan accents  
✅ Multiple sections (Home, About, Tech, Projects, Contact)  

## Key Files

- `app/page.tsx` - Main portfolio page
- `components/` - All sections
- `tailwind.config.ts` - Colors & styling
- `.env.local` - EmailJS credentials
- `SETUP.md` - Detailed setup
- `README.md` - Full documentation

## Animations

Built with Framer Motion - animations trigger on scroll! ✨

No configuration needed - they work out of the box.

## Colors

Already configured with professional dark theme:
- Primary: Cyan (#c3f5ff)
- Background: Dark (#0b1326)
- Secondary: Blue-gray (#b9c8de)

## Support

- 📖 Check `README.md` for full docs
- 🔧 Check `SETUP.md` for setup help
- 📧 EmailJS issues? Visit emailjs.com/docs

---

**That's it!** Your portfolio is ready to customize and deploy. Happy coding! 🚀
