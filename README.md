# Personal Website - Binah Theme

A premium personal portfolio website inspired by Binah from Library of Ruina, featuring sophisticated animations, dark aesthetic with golden accents, and a mysterious, library-themed design.

## 🎨 Design Features

- **Binah-Inspired Theme**: Dark color palette with golden accents
- **Premium Animations**: Smooth transitions, particle effects, and scroll-based animations
- **Responsive Design**: Works perfectly on all devices
- **Interactive Elements**: Hover effects, loading animations, and dynamic content
- **Modern Typography**: Crimson Text and Inter fonts for elegant readability
- **Particle System**: Floating golden particles with animation
- **Parallax Effects**: Subtle parallax scrolling for depth

## 🚀 Getting Started

1. **Add Your Images**: Place your images in the `images/` folder:
   - `profile.jpg` - Your profile picture (300x300px recommended)
   - `prescripts-preview.jpg` - Screenshot of your prescripts project
   - Any other project images

2. **Update Your Information**:
   - Edit the contact links in `index.html`
   - Update your Steam profile link
   - Add your email and LinkedIn
   - Customize the project sections

3. **Open the Website**:
   - Simply open `index.html` in your browser
   - For development, use a local server like Live Server in VS Code

## 📂 File Structure

```
PersonalWebsite/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript interactions and animations
├── README.md           # This file
└── images/             # Your images folder
    ├── profile.jpg     # Your profile picture
    └── ...             # Other project images
```

## 🎯 Customization

### Colors (CSS Variables in styles.css)
```css
--primary-dark: #0a0a0a;        /* Main background */
--accent-gold: #d4af37;         /* Golden accent color */
--accent-light-gold: #f4d03f;   /* Lighter gold variant */
--text-primary: #e8e8e8;        /* Main text color */
```

### Sections to Update

1. **Hero Section**: Update your name, title, and stats
2. **About Section**: Add your personal description and skills
3. **Projects Section**: Replace placeholder projects with your own
4. **Contact Section**: Update all social links and contact information

### Adding New Projects

Copy this structure in the projects grid:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://your-project.com" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="https://github.com/your-repo" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <div class="project-category">Category</div>
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
            <!-- Add more tech tags -->
        </div>
    </div>
</div>
```

## 🎮 Interactive Features

- **Loading Animation**: 3-second loading screen with progress bar
- **Smooth Scrolling**: Navigation smoothly scrolls to sections
- **Scroll Progress**: Top progress bar shows reading progress
- **Particle Effects**: Animated golden particles in the background
- **Hover Animations**: Cards and buttons have sophisticated hover effects
- **Form Submission**: Contact form with animated feedback
- **Developer Console**: Hidden easter eggs for developers (try `revealSecrets()`)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **Vanilla JavaScript**: No frameworks for maximum performance
- **Font Awesome**: Icons
- **Google Fonts**: Crimson Text & Inter typography

## 🎨 Color Palette

- **Primary Dark**: `#0a0a0a` - Main background
- **Secondary Dark**: `#1a1a1a` - Card backgrounds
- **Tertiary Dark**: `#2a2a2a` - Input fields, secondary elements
- **Accent Gold**: `#d4af37` - Primary accent, highlights
- **Light Gold**: `#f4d03f` - Hover states, gradients
- **Deep Gold**: `#b8860b` - Darker accent variant

## 🌟 Performance Features

- **Vanilla JS**: No heavy frameworks
- **Optimized Animations**: GPU-accelerated transforms
- **Lazy Loading**: Images load when needed
- **Compressed CSS**: Efficient selectors and minimal redundancy
- **Performance Monitoring**: Console logs load times

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px-1199px (Adjusted grid)
- **Mobile**: <768px (Single column, mobile nav)

## 🎭 Binah Theme Elements

- **Typography**: Elegant serif headings with sans-serif body
- **Color Scheme**: Dark backgrounds with golden accents
- **Animations**: Mysterious, flowing animations
- **Layout**: Library-inspired sections and terminology
- **Atmosphere**: Premium, sophisticated feeling

## 📧 Contact & Support

Feel free to reach out if you need help customizing the theme or have questions about the implementation!

---

*"In the City, we are all guided by mysterious directives..."* - Inspired by Project Moon's Library of Ruina
