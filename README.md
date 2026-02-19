# Dnyaneshwar Jayram Jadhav - Modern Portfolio Website

A stunning, modern, and fully responsive personal portfolio website for a Social Work professional. Features dark/light mode toggle, auto-scrolling events section, and beautiful animations.

## 🌟 Key Features

### ✨ Design & UI
- **Modern Design**: Clean, professional UI with improved typography and spacing
- **Dark/Light Mode**: Smooth theme switching with localStorage persistence
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations throughout
- **Gradient Accents**: Beautiful gradient text and backgrounds
- **Hover Effects**: Interactive card hover states and transitions

### 🎨 Theme System
- **Dual Theme Support**: Light and dark modes
- **CSS Variables**: Modern color system with design tokens
- **Smooth Transitions**: 300ms transitions between themes
- **System Preference**: Detects user's OS theme preference

### 📱 Sections

1. **Hero Section**
   - Profile image with floating badge
   - Social media links (LinkedIn, GitHub, Twitter)
   - Contact information pills
   - Animated background shapes
   - Download resume CTA

2. **About Me**
   - Career objective card
   - Personal attributes with icons
   - Language proficiency

3. **Education**
   - Timeline layout
   - Semester-wise SGPA display
   - Current student badge
   - Animated progress indicators

4. **Professional Experience**
   - Modern card layout
   - Key responsibilities with checkmarks
   - Duration and location tags
   - Staggered animations

5. **Core Competencies**
   - Icon-based grid layout
   - Hover scale effects
   - Professional icons from Lucide

6. **Skills & Expertise**
   - Technical and Core skills separation
   - Pill-style skill badges
   - Hover interactions

7. **Events & Activities** ⭐ NEW
   - Auto-scrolling vertical section
   - Pause on hover functionality
   - Event cards with images
   - Infinite scroll effect
   - Smooth animations

8. **Volunteering**
   - Community service showcase
   - Heart-themed design
   - Organization and duration details

9. **Research Experience**
   - Academic projects display
   - Project type badges
   - Detailed descriptions

10. **Contact**
    - Functional contact form
    - Contact information cards
    - Social media integration
    - Form validation ready

11. **Footer**
    - Professional signature
    - Scroll to top button
    - Social links

## 🛠️ Tech Stack

- **React 19** - Latest functional components with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS with custom design tokens
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icons
- **CSS Variables** - Dynamic theming system

## 🎨 Design Tokens

### Color Palette

**Light Mode:**
- Primary: `#6366F1` (Indigo)
- Secondary: `#10B981` (Green)
- Accent: `#F59E0B` (Amber)
- Background: `#FFFFFF`
- Text: `#111827`

**Dark Mode:**
- Background: `#0F172A` (Slate)
- Surface: `#1E293B`
- Text: `#F1F5F9`

### Typography
- Font Family: Inter, Segoe UI, system fonts
- Headings: Bold, 700 weight
- Body: Regular, 400 weight

### Spacing
- Section Padding: 6rem (desktop), 4rem (mobile)
- Card Padding: 1.5rem
- Gap Sizes: 4px, 8px, 12px, 16px, 24px

## 📦 Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <your-repo-url>
   cd dyaneshwarr_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Key Components

### Dark Mode Toggle
Located in the navbar, persists preference in localStorage.
```jsx
// Automatically detects system preference on first visit
// Saves user choice for future visits
```

### Events Section
Auto-scrolling events with hover pause:
```jsx
// Infinite scroll effect
// Pauses when hovering
// Smooth vertical animation
```

### Hero Section
Enhanced with profile image and social links:
```jsx
// Floating badge with current status
// Animated background shapes
// Social media integration
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with dark mode toggle
│   ├── DarkModeToggle.jsx      # Theme switcher component
│   ├── Hero.jsx                # Hero section with image
│   ├── About.jsx               # About & career objective
│   ├── Education.jsx           # Education timeline
│   ├── Experience.jsx          # Professional experience
│   ├── Competencies.jsx        # Core competencies grid
│   ├── Skills.jsx              # Skills showcase
│   ├── Events.jsx              # Auto-scrolling events
│   ├── Volunteering.jsx        # Volunteering activities
│   ├── Research.jsx            # Research projects
│   ├── Contact.jsx             # Contact form & info
│   └── Footer.jsx              # Footer with scroll-to-top
├── data/
│   ├── portfolioData.js        # Personal & portfolio data
│   └── eventsData.js           # Events section data
├── App.jsx                     # Main app component
├── main.jsx                    # App entry point
└── index.css                   # Global styles & theme
```

## 🔧 Customization Guide

### 1. Update Personal Information
Edit `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  name: "YOUR NAME",
  email: "your.email@example.com",
  // ... more fields
};
```

### 2. Add Events
Edit `src/data/eventsData.js`:
```javascript
export const events = [
  {
    id: 1,
    title: "Event Title",
    description: "Event description",
    image: "image-url",
    date: "Date"
  },
  // Add more events
];
```

### 3. Update Hero Image
In `src/components/Hero.jsx`, change the image URL:
```jsx
<img src="YOUR_IMAGE_URL" alt={personalInfo.name} />
```

### 4. Connect Social Media
Update social links in `src/components/Hero.jsx` and `src/components/Contact.jsx`:
```jsx
const socialLinks = [
  { icon: Linkedin, href: 'your-linkedin-url', ... },
  // ... more links
];
```

### 5. Add Resume Download
In `src/components/Hero.jsx`:
```javascript
const handleDownloadResume = () => {
  window.open('/path-to-your-resume.pdf', '_blank');
};
```

### 6. Integrate Contact Form
In `src/components/Contact.jsx`, connect to your backend:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add your API call here
  await fetch('your-api-endpoint', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

### 7. Customize Theme Colors
Edit `src/index.css`:
```css
@theme inline {
  --color-primary: #YOUR_COLOR;
  --color-secondary: #YOUR_COLOR;
  /* ... more colors */
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

Or use CLI:
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Deploy `dist` folder to Netlify
3. Or use Netlify CLI:
```bash
npm run build
netlify deploy --prod
```

### GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repo-name/',
     // ... rest of config
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## ✨ Features in Detail

### Dark Mode Implementation
- Uses CSS classes on `body` element
- Persists choice in localStorage
- Smooth 300ms transitions
- System preference detection
- Custom scrollbar styling

### Auto-Scrolling Events
- RequestAnimationFrame for smooth animation
- Duplicated content for infinite effect
- Hover detection to pause scroll
- Responsive image handling
- Gradient masks for fade effect

### Animation System
- Scroll-based animations with IntersectionObserver
- Staggered entrance animations
- Hover scale effects
- Smooth page transitions
- Performance-optimized

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexible grid layouts
- Touch-friendly interactions
- Optimized images

## 🎨 Color System

### Primary Gradient
- Light: `#6366F1` → `#4F46E5`
- Creates visual hierarchy
- Used for CTAs and accents

### Background Layers
- Light: White → Light Gray
- Dark: Dark Slate → Slate
- Subtle gradients for depth

### Text Hierarchy
- Primary: High contrast for readability
- Secondary: Medium contrast for body text
- Tertiary: Low contrast for metadata

## 📱 Mobile Optimization

- Hamburger menu for mobile navigation
- Stacked layouts on small screens
- Touch-friendly button sizes (min 44px)
- Optimized images for mobile bandwidth
- Responsive typography scaling

## 🔒 Best Practices

- Semantic HTML for accessibility
- ARIA labels on interactive elements
- Alt text on all images
- Focus states for keyboard navigation
- Smooth scroll behavior
- Optimized bundle size
- Lazy loading for images
- Code splitting ready

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Dnyaneshwar Jayram Jadhav**
- Email: jadhavdnyaneshwar231000@gmail.com
- Phone: 8766438432
- Location: Mumbai, Maharashtra
- MSW Student (Health Social Work Practice)
- Nirmala Niketan, Mumbai

## 🙏 Acknowledgments

- Framer Motion for animations
- Tailwind CSS for styling system
- Lucide for beautiful icons
- Pexels & Unsplash for images

---

**Made with ❤️ for Social Development**

*Last Updated: February 2026*
