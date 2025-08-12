# 🚀 TechMintLab - Professional IT Company Website

A modern, responsive website for TechMintLab - a premier IT company specializing in mobile apps, websites, and desktop software development. Built with React.js and featuring a beautiful, professional design.

## ✨ Features

### **🎯 Core Features**
- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Beautiful animations and smooth transitions
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Fast loading and smooth interactions
- **Accessibility Ready** - ARIA labels and keyboard navigation

### **🏠 Home Page Features**
- **Hero Carousel** - Auto-rotating slides with dynamic content
- **Dynamic Text** - Different colors and styles for highlighted words
- **Phone Integration** - Interactive call button with phone number display
- **Office Showcase** - Professional business environment image
- **Call-to-Action** - Multiple CTA buttons for user engagement
- **Background Images** - High-quality Unsplash background images
- **Responsive Layout** - Adapts perfectly to all screen sizes

### **📋 Portfolio Page Features**
- **Portfolio Carousel** - Interactive project showcase with navigation arrows
- **Pagination Dots** - Visual navigation indicators
- **Floating Action Buttons** - WhatsApp and phone contact buttons
- **Services Section** - Three-tier pricing packages:
  - **Basic Development** (₹5,000) - Landing Page
  - **Standard Development** (₹15,000) - Business Website
  - **Premium Development** (₹35,000) - Full Stack App
- **Project Grid** - Detailed portfolio items with hover effects
- **CTA Section** - Call-to-action for potential clients

### **🧭 Navigation Features**
- **Responsive Navbar** - Mobile-friendly with hamburger menu
- **Logo Integration** - Professional branding with company logo
- **Smooth Transitions** - Animated menu interactions
- **Active State** - Visual feedback for current page
- **Mobile Toggle** - Touch-friendly mobile navigation

### **📱 Responsive Features**
- **Mobile-First Design** - Optimized for mobile devices
- **Breakpoint System** - 640px, 768px, 1024px breakpoints
- **Touch-Friendly** - Optimized for touch interactions
- **Flexible Grids** - CSS Grid and Flexbox layouts
- **Adaptive Typography** - Responsive font sizes using clamp()

## 🛠️ Tech Stack

### **Frontend Technologies**
- **React.js 19** - Latest React version with modern hooks
- **React Router DOM 7.8** - Client-side routing for SPA
- **Create React App 5.0** - Build tool and development environment
- **JavaScript ES6+** - Modern JavaScript features

### **Styling & Design**
- **Custom CSS3** - Modern CSS with Grid, Flexbox, and animations
- **CSS Variables** - Dynamic theming and consistent spacing
- **Responsive Design** - Mobile-first approach with media queries
- **CSS Animations** - Smooth transitions and hover effects
- **SVG Icons** - Scalable vector graphics for better performance

### **Development Tools**
- **npm** - Package manager
- **Git** - Version control
- **VS Code** - Recommended IDE
- **Chrome DevTools** - Debugging and testing

### **Performance & Optimization**
- **Lazy Loading** - Component optimization
- **Image Optimization** - Web-optimized images
- **CSS Minification** - Production build optimization
- **Code Splitting** - React Router based splitting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation header with mobile toggle
│   ├── Footer.jsx      # Footer with contact info and social links
│   ├── HomeCarousel.jsx # Home page hero carousel with auto-rotation
│   └── PortfolioCarousel.jsx # Portfolio showcase with navigation
├── pages/               # Page components
│   ├── Home.jsx        # Home page with hero section
│   └── Portfolio.jsx   # Portfolio page with services and projects
├── styles/              # CSS stylesheets
│   └── custom.css      # Main stylesheet with responsive design
├── assets/              # Images and static files
│   └── images/         # Logo and office images
├── App.js              # Main app component with routing
└── index.js            # App entry point with CSS imports
```

### **🔧 Component Details**

#### **Navbar.jsx**
- **State Management**: `useState` for mobile menu toggle
- **Responsive Design**: Mobile hamburger menu
- **Logo Integration**: Company logo with proper alt text
- **Navigation Links**: Home, Portfolio, Contact with active states
- **CTA Button**: Contact Us button for lead generation

#### **HomeCarousel.jsx**
- **Auto-rotation**: 4.5-second interval between slides
- **Dynamic Content**: 3 different slide variations
- **Phone Integration**: Interactive call button with number display
- **Background Images**: High-quality Unsplash backgrounds
- **Responsive Layout**: Two-column layout on desktop, single on mobile

#### **PortfolioCarousel.jsx**
- **Interactive Navigation**: Left/right arrow controls
- **Pagination Dots**: Visual slide indicators
- **Floating Buttons**: WhatsApp and phone contact FABs
- **Product Display**: Image, name, description, and pricing
- **Smooth Transitions**: CSS transitions for all interactions

#### **Footer.jsx**
- **Four-Column Layout**: Company info, quick links, services, contact
- **Social Media**: Facebook, Twitter, LinkedIn integration ready
- **Contact Information**: Address, phone, email with icons
- **Responsive Design**: Stacks on mobile devices

## 🎨 **CSS & Design Features**

### **Modern CSS Implementation**
- **CSS Grid & Flexbox**: Advanced layout systems for complex designs
- **CSS Variables**: Dynamic theming with `:root` variables for consistent colors
- **CSS Animations**: Smooth transitions, hover effects, and keyframe animations
- **Responsive Units**: `clamp()`, `vw`, `vh`, and `rem` for flexible sizing
- **Advanced Selectors**: Pseudo-classes and attribute selectors for dynamic styling

### **Responsive Design System**
- **Mobile-First Approach**: Designed for mobile with progressive enhancement
- **Breakpoint Strategy**: Strategic breakpoints at 640px, 768px, and 1024px
- **Flexible Typography**: Responsive font sizes using `clamp()` function
- **Adaptive Spacing**: Consistent spacing system that scales with screen size
- **Touch Optimization**: Touch-friendly buttons and mobile interactions

### **Performance & Animation**
- **CSS Transforms**: Hardware-accelerated animations using `transform` and `opacity`
- **Efficient Selectors**: Optimized CSS selectors for better performance
- **Minimal Repaints**: CSS properties that don't trigger layout recalculations
- **Smooth Transitions**: 0.3s ease transitions for all interactive elements

## 📚 **Libraries & Dependencies**

### **Core Dependencies**
- **react@^19.0.0**: Latest React with modern hooks and features
- **react-dom@^19.0.0**: React DOM rendering
- **react-router-dom@^7.8.0**: Client-side routing for SPA
- **react-scripts@5.0.1**: Create React App build scripts

### **Development Dependencies**
- **gh-pages@^6.1.0**: GitHub Pages deployment
- **web-vitals@^5.1.0**: Performance monitoring

### **External Resources**
- **Unsplash Images**: High-quality background images for carousel
- **Google Fonts**: Inter font family for modern typography
- **SVG Icons**: Custom SVG icons for better performance

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd cofee_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📱 Pages & Components

### 🏠 Home Page (`/`)
- **Hero Carousel**: Auto-rotating slides with dynamic content
- **Phone Button**: Interactive call button with phone number
- **Office Image**: Professional business environment showcase
- **Responsive Design**: Adapts to all screen sizes

### 📋 Portfolio Page (`/portfolio`)
- **Portfolio Carousel**: Interactive project showcase
- **Services Section**: Three-tier pricing packages
- **Project Grid**: Detailed project information
- **CTA Section**: Call-to-action for potential clients

### 🧭 Navigation
- **Responsive Navbar**: Mobile-friendly navigation
- **Logo Integration**: Professional branding
- **Smooth Transitions**: Animated menu interactions

## 🎨 Customization

### Colors & Branding
The project uses CSS variables for easy customization:

```css
:root {
  --primary: #0ea5e9;
  --accent: #22d3ee;
  --bg: #0b1220;
  --text: #334155;
}
```

### Content Updates
- **Hero Content**: Edit `src/components/HomeCarousel.jsx`
- **Portfolio Projects**: Update `src/pages/Portfolio.jsx`
- **Services**: Modify pricing in the services section
- **Contact Info**: Update phone numbers and emails

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # Or use a different port
   PORT=3001 npm start
   ```

2. **PowerShell execution policy error**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Dependencies not found**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Performance Tips

- Images are optimized for web use
- CSS uses modern features for smooth animations
- Components are lazy-loaded for better performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- **Phone**: +91-7027944324
- **Email**: info@techmintlab.com
- **Website**: [techmintlab.com](https://techmintlab.com)

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Build command: `npm run build`

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

---

**Made with ❤️ by TechMintLab Team**

*Professional IT Solutions for Modern Businesses*
