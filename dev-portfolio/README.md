# Troy Volpe - Portfolio Website

A modern, responsive portfolio website showcasing my cybersecurity expertise, projects, and professional background. Built with React and featuring an integrated visitor analytics system.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green)

## 🚀 Live Demo

[View Live Portfolio](https://troyvolpe.com) (Hosted on Raspberry Pi)

## ✨ Features

- **Modern Design**: Clean, professional layout with emerald green theme
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations using Framer Motion
- **Project Showcase**: Expandable project cards with detailed descriptions
- **Visitor Analytics**: Privacy-compliant visitor tracking system
- **Performance Optimized**: Fast loading and efficient bundle size
- **Self-Hosted**: Deployed on Raspberry Pi infrastructure

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern component-based UI framework
- **Framer Motion 12.23.22** - Smooth animations and transitions
- **CSS3** - Custom styling with gradients and responsive design
- **HTML5** - Semantic markup and accessibility

### Backend
- **Node.js** - JavaScript runtime for visitor logging
- **Express.js** - Web framework for API endpoints
- **File-based Logging** - Simple, reliable visitor data storage

### Development Tools
- **Create React App** - Build toolchain and development server
- **npm** - Package management
- **Git** - Version control

## 📂 Project Structure

```
dev-portfolio/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA configuration
│   ├── favicon.svg         # Site icon
│   └── robots.txt          # Search engine instructions
├── src/
│   ├── components/
│   │   ├── Hero.js         # Landing section
│   │   ├── About.js        # About me section
│   │   ├── Projects.js     # Projects showcase
│   │   ├── Contact.js      # Contact information
│   │   └── *.css          # Component-specific styles
│   ├── visitor-logger/     # Backend analytics system
│   │   ├── server.js       # Express server
│   │   └── package.json    # Backend dependencies
│   ├── App.js             # Main application component
│   ├── App.css            # Global styles
│   └── index.js           # Application entry point
├── package.json           # Frontend dependencies
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/troyvolpe/Dev-Portfolio.git
cd Dev_Portfolio/dev-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Start the visitor logger (optional):**
```bash
cd src/visitor-logger
npm install
node server.js
```

The portfolio will be available at `http://localhost:3000`

## 📊 Visitor Analytics

The portfolio includes a privacy-compliant visitor tracking system that logs:
- Anonymous visitor statistics
- Browser and OS information
- Page visit timestamps
- Referrer information

**Privacy Note**: No personal information is collected. All data is anonymous and stored locally.

## 🌐 Deployment

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Raspberry Pi Deployment

1. **Build the application:**
```bash
npm run build
```

2. **Copy build files to your Raspberry Pi**

3. **Set up a web server (Apache/Nginx)**

4. **Configure the visitor logger service**

5. **Set up SSL certificate for HTTPS**

## 🎨 Customization

### Updating Content
- **Personal Information**: Edit `src/components/About.js`
- **Projects**: Update the projects array in `src/components/Projects.js`
- **Contact Details**: Modify `src/components/Contact.js`
- **Styling**: Customize CSS files in `src/components/`

### Color Scheme
The portfolio uses an emerald green theme. To change colors, update the CSS custom properties in the component stylesheets.

### Adding Projects
Add new projects to the `projects` array in `src/components/Projects.js`:

```javascript
{
  title: 'Your Project Name',
  description: 'Brief description...',
  details: 'Detailed description for dropdown...',
  link: 'https://github.com/username/repo'
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm test` - Run test suite
- `npm run build` - Create production build
- `npm run eject` - Eject from Create React App (irreversible)

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Load Time**: < 2s on 3G networks
- **SEO Optimized**: Semantic HTML and meta tags

## 🛡️ Security Features

- Input validation and sanitization
- CORS protection
- Secure headers implementation
- Privacy-compliant analytics
- No sensitive data exposure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Troy Volpe**
- Email: troyvolpe1@gmail.com
- LinkedIn: [linkedin.com/in/-troyvolpe/](https://www.linkedin.com/in/-troyvolpe/)
- GitHub: [github.com/troyvolpe](https://github.com/troyvolpe)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Create React App](https://create-react-app.dev/) - Build toolchain
- Raspberry Pi Foundation for self-hosting capabilities

---

⭐ Star this repository if you found it helpful!
