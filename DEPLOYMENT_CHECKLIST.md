# ✅ Deployment Checklist

Complete this checklist before deploying to production.

## 🎯 Pre-Deployment

### Content & Branding
- [ ] Updated About section with your bio
- [ ] Replaced profile image with your actual photo
- [ ] Added your real education history
- [ ] Updated tech stack with your actual skills
- [ ] Updated certifications with real credentials
- [ ] Updated all social media links
- [ ] Changed email address for contact form
- [ ] Updated resume link in navbar
- [ ] Updated footer copyright text

### Email Configuration
- [ ] Created EmailJS account at emailjs.com
- [ ] Created email service (Gmail, Outlook, etc.)
- [ ] Created email template with required variables
- [ ] Got Public Key from EmailJS
- [ ] Got Service ID from EmailJS
- [ ] Got Template ID from EmailJS
- [ ] Created `.env.local` file
- [ ] Added all EmailJS credentials to `.env.local`
- [ ] Tested contact form locally
- [ ] Received test email successfully

### Design & UX
- [ ] Reviewed portfolio on desktop (1920px)
- [ ] Reviewed portfolio on tablet (768px)
- [ ] Reviewed portfolio on mobile (375px)
- [ ] Tested all navigation links
- [ ] Tested smooth scroll works
- [ ] Verified all animations play
- [ ] Checked image loading times
- [ ] Verified no broken links
- [ ] Checked form validation works
- [ ] Tested on different browsers

### Performance
- [ ] Lighthouse score is 90+
- [ ] Page loads in under 2 seconds
- [ ] Images are optimized
- [ ] No console errors
- [ ] No console warnings (except known third-party)
- [ ] Mobile performance is good

### Accessibility
- [ ] All images have alt text
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] Links are descriptive
- [ ] Form labels are proper
- [ ] No ARIA warnings

## 🔧 Code Quality

### TypeScript
- [ ] No TypeScript errors
- [ ] All types are properly defined
- [ ] No `any` types (unless necessary)
- [ ] Imports are clean

### Code Style
- [ ] Components are properly organized
- [ ] File names are correct (PascalCase)
- [ ] No unused imports
- [ ] No commented-out code
- [ ] Consistent formatting

### Git
- [ ] All changes are committed
- [ ] Commit messages are clear
- [ ] No secrets in git history
- [ ] `.env.local` is in `.gitignore`
- [ ] `node_modules` is in `.gitignore`

## 🚀 Vercel Deployment Prep

### GitHub Setup
- [ ] Repository is on GitHub
- [ ] Main/master branch is clean
- [ ] All commits are pushed
- [ ] README.md is in root (optional)
- [ ] `.gitignore` is configured

### Vercel Configuration
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Repository selected
- [ ] Root directory is correct (`/`)
- [ ] Build command is correct (`pnpm build`)
- [ ] Output directory is correct (`.next`)
- [ ] Install command is correct (`pnpm install`)

### Environment Variables (Vercel)
- [ ] Logged in to Vercel dashboard
- [ ] Project created
- [ ] Settings → Environment Variables accessed
- [ ] Added `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- [ ] Added `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- [ ] Added `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- [ ] Added `NEXT_PUBLIC_RECIPIENT_EMAIL`
- [ ] Verified variables are visible (not masked for public keys)

## 📋 Pre-Deploy Testing

### Local Build Test
```bash
pnpm build
pnpm start
```
- [ ] Build completes without errors
- [ ] Build completes in reasonable time
- [ ] Production server starts
- [ ] Portfolio works at localhost:3000
- [ ] Contact form works
- [ ] No errors in production mode

### Final Content Check
- [ ] All text is correct and typo-free
- [ ] All links work correctly
- [ ] All images are loading
- [ ] Font sizing looks good
- [ ] Colors look correct
- [ ] Spacing looks balanced

## 🎬 Deployment

### Deploy to Vercel
1. [ ] Push code to GitHub
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. [ ] Go to vercel.com/dashboard

3. [ ] Import project from GitHub
   - [ ] Select repository
   - [ ] Confirm settings
   - [ ] Click "Import"

4. [ ] Add environment variables
   - [ ] Go to Settings
   - [ ] Click Environment Variables
   - [ ] Add all EmailJS variables
   - [ ] Save

5. [ ] Deploy
   - [ ] Go to Deployments tab
   - [ ] Wait for build to complete
   - [ ] Check build logs for errors
   - [ ] Click visit button
   - [ ] Verify site loads

## ✨ Post-Deployment

### Verification
- [ ] Site is live at Vercel URL
- [ ] All content displays correctly
- [ ] Animations work
- [ ] Contact form works
- [ ] Can receive test email
- [ ] Mobile responsive
- [ ] Performance is good

### Domain Setup (Optional)
- [ ] Custom domain purchased
- [ ] DNS records updated
- [ ] Domain connected to Vercel
- [ ] SSL certificate generated
- [ ] HTTPS works
- [ ] www redirect works

### Monitoring
- [ ] Added Google Analytics (optional)
- [ ] Monitoring performance
- [ ] Check logs for errors
- [ ] Monitor email delivery

### Sharing
- [ ] Created short URL if needed
- [ ] Added portfolio URL to resume
- [ ] Updated LinkedIn
- [ ] Updated GitHub profile
- [ ] Shared with network

## 🔄 Ongoing Maintenance

### Regular Checks
- [ ] Test contact form monthly
- [ ] Check for broken links
- [ ] Monitor performance metrics
- [ ] Review analytics
- [ ] Check for updates to dependencies

### Future Updates
- [ ] Plan new content
- [ ] Update tech stack as needed
- [ ] Add new projects/certifications
- [ ] Refresh images periodically
- [ ] Update resume/CV

## 🆘 Troubleshooting Checklist

### Build fails on Vercel
- [ ] Check build logs
- [ ] Verify Node version is compatible
- [ ] Check for missing environment variables
- [ ] Try redeploying
- [ ] Check GitHub for uncommitted changes

### Contact form doesn't work
- [ ] Verify environment variables are set
- [ ] Check EmailJS credentials are correct
- [ ] Verify email service is connected in EmailJS
- [ ] Test template in EmailJS dashboard
- [ ] Check browser console for errors

### Site looks wrong on Vercel
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Check CSS loaded (DevTools → Network)
- [ ] Verify images loading (DevTools → Network)
- [ ] Check for console errors

### Performance is slow
- [ ] Check Lighthouse score
- [ ] Review image sizes
- [ ] Check for large dependencies
- [ ] Monitor API response times
- [ ] Consider upgrading plan if needed

## 📞 Support Resources

If something goes wrong:
1. Check Vercel logs
2. Check browser console errors
3. Review documentation files
4. Search Stack Overflow
5. Check GitHub issues
6. Contact Vercel support

## 🎉 Launch Celebration!

Once deployed and verified:
- [ ] Test on multiple devices
- [ ] Get feedback from friends
- [ ] Celebrate! 🎊
- [ ] Start using it on your resume
- [ ] Share your success!

---

## ⚠️ Important Reminders

**DO:**
- ✅ Keep `.env.local` secure (never commit)
- ✅ Update content regularly
- ✅ Monitor form submissions
- ✅ Keep dependencies updated
- ✅ Backup your code

**DON'T:**
- ❌ Commit `.env.local` to git
- ❌ Share API keys publicly
- ❌ Use test data in production
- ❌ Ignore security warnings
- ❌ Forget to test before deploy

---

## 📊 Quick Status

Use this quick checklist for final verification:

```
Content:       [ ] ✓
Email Setup:   [ ] ✓
Testing:       [ ] ✓
Build:         [ ] ✓
Env Variables: [ ] ✓
Deployment:    [ ] ✓
Verification:  [ ] ✓
```

All checkboxes checked? You're good to go! 🚀

---

**Last Updated**: May 5, 2026

For detailed steps, see:
- START_HERE.md - Quick setup
- SETUP.md - EmailJS configuration
- README.md - Full documentation
