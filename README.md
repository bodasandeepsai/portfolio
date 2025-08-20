# Boda Sandeep Sai - Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring 3D animations, particle effects, and responsive design.

## 🚀 Features

### ✨ Enhanced UI/UX
- **3D Background Elements**: Interactive particle systems and floating geometric shapes
- **3D Skills Visualization**: Interactive 3D spheres representing different skills and technologies
- **Advanced Animations**: Scroll-triggered animations, hover effects, and smooth transitions
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Automatic theme switching based on system preferences

### 🎨 Interactive Components
- **Animated Cards**: 3D tilt effects and glow animations for project cards
- **Particle Background**: Dynamic particle system using Three.js
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Hover Effects**: Interactive elements with engaging micro-animations

### 📱 Sections
- **Hero Section**: Personal introduction with 3D animated sphere background
- **About**: Professional summary and background information
- **Skills**: Interactive 3D skills visualization and comprehensive skill categories
- **Projects**: Showcase of personal projects with enhanced animations
- **Experience**: Professional experience and education timeline
- **Contact**: Contact information and social media links

## 🛠️ Technologies Used

### Frontend
- **Next.js 13**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animations and transitions

### 3D Graphics & Animations
- **Three.js**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for React Three Fiber
- **React Spring**: Spring-physics based animations

### Additional Libraries
- **Lucide React**: Modern icon library
- **React Intersection Observer**: Scroll-triggered animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bodasandeepsai/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── AnimatedCard.tsx   # Enhanced card component with 3D effects
│   ├── Hero.tsx           # Hero section with 3D background
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills with 3D visualization
│   ├── Projects.tsx       # Projects showcase
│   ├── Experience.tsx     # Experience timeline
│   ├── Contact.tsx        # Contact information
│   ├── Navigation.tsx     # Navigation component
│   ├── ParticleBackground.tsx  # 3D particle system
│   └── SkillsVisualization.tsx # Interactive 3D skills
├── hooks/                 # Custom React hooks
│   └── useScrollAnimation.ts   # Scroll animation utilities
├── public/               # Static assets
└── README.md            # Project documentation
```

## 🎯 Key Features Implemented

1. **Personal Information**: Updated all sections with Boda Sandeep Sai's details
2. **3D Enhancements**: Added interactive 3D elements throughout the site
3. **Advanced Animations**: Implemented scroll-triggered and hover animations
4. **Modern UI**: Enhanced visual design with particle effects and smooth transitions
5. **Interactive Elements**: 3D skills visualization and animated project cards
6. **Performance Optimized**: Lazy loading for 3D components and optimized animations

## 📧 Contact

**Boda Sandeep Sai**
- Email: bodasandeepsai@gmail.com
- GitHub: [github.com/bodasandeepsai](https://github.com/bodasandeepsai)
- LinkedIn: [linkedin.com/in/bodasandeepsai](https://linkedin.com/in/bodasandeepsai)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, Three.js, and modern web technologies.
