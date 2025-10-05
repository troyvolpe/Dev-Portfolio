# 📄 Resume Setup Instructions

## 🎯 **Your resume links are now ready!**

I've added resume buttons in two locations:
1. **Hero Section**: Prominent call-to-action button below your intro
2. **Contact Section**: Resume link alongside your other contact methods

## 📁 **To complete the setup:**

### **1. Add Your Resume PDF**
Place your resume file in the `public` folder as `resume.pdf`:

```bash
# Copy your resume to the public folder
cp /path/to/your/resume.pdf ~/Dev-Portfolio/dev-portfolio/public/resume.pdf
```

### **2. File Requirements**
- **Filename**: Must be exactly `resume.pdf` (lowercase)
- **Location**: `/public/resume.pdf`
- **Format**: PDF (recommended for universal compatibility)
- **Size**: Keep under 5MB for fast loading

### **3. Deploy the Changes**
```bash
cd ~/Dev-Portfolio/dev-portfolio
npm run build
sudo rm -rf /var/www/Dev-Portfolio/*
sudo cp -r build/* /var/www/Dev-Portfolio/
sudo chown -R www-data:www-data /var/www/Dev-Portfolio
```

## 🎨 **Button Features Added:**

### **Hero Section Button:**
- ✅ Prominent placement below your introduction
- ✅ Animated entrance with Framer Motion
- ✅ Emerald green gradient matching your theme
- ✅ Hover effects with glow animation
- ✅ Opens in new tab/window

### **Contact Section Link:**
- ✅ Integrated with existing contact links
- ✅ Special darker emerald styling to stand out
- ✅ Subtle pulse animation for attention
- ✅ Responsive design for mobile

## 🔗 **How It Works:**

The buttons link to `/resume.pdf` which will:
- Open in a new browser tab
- Allow visitors to view your resume
- Enable download options
- Work on all devices (mobile/desktop)

## 📱 **Mobile Responsive:**

Both buttons are fully responsive and will:
- Stack properly on mobile devices
- Maintain readable font sizes
- Keep hover effects for touch devices

## 🎯 **Next Steps:**

1. Add your `resume.pdf` to the `public` folder
2. Test locally: `npm start` and check both buttons
3. Deploy to your Raspberry Pi using the commands above
4. Visit https://troyvolpe.com to see it live!

## 💡 **Pro Tips:**

- Keep your resume updated and professional
- Consider having both a detailed and concise version
- Make sure the PDF is optimized for web viewing
- Test the links after deployment

Your portfolio now has professional resume access points that will help potential employers easily view your qualifications! 🚀