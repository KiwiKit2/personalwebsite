// Modern JavaScript for Simplified Personal Website

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation Active State
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Cursor Glow Effect
function createCursorGlow() {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX - 150 + 'px';
        cursorGlow.style.top = e.clientY - 150 + 'px';
    });
}

// Initialize cursor glow when DOM is ready
document.addEventListener('DOMContentLoaded', createCursorGlow);

// Project Cards Animation
function animateProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });
}

// Contact Cards Animation
function animateContactCards() {
    const cards = document.querySelectorAll('.contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// Interest Tags Animation
function animateInterests() {
    const interests = document.querySelectorAll('.interest');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    interests.forEach(interest => {
        interest.style.opacity = '0';
        interest.style.transform = 'translateY(20px) scale(0.9)';
        interest.style.transition = 'all 0.4s ease';
        observer.observe(interest);
    });
}

// Parallax Effect for Hero Background
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            const speed = scrolled * 0.3;
            heroImage.style.transform = `translateY(${speed}px) scale(1.1)`;
        }
    });
}

// Enhanced Hover Effects
function addHoverEffects() {
    // Project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Contact cards
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Interest tags
    document.querySelectorAll('.interest').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Subtle Floating Animation
function createFloatingElements() {
    const floatingElements = document.querySelectorAll('.avatar, .project-icon img');
    
    floatingElements.forEach((element, index) => {
        element.style.animation = `float 6s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Add floating keyframes if not already present
    if (!document.querySelector('#floating-styles')) {
        const style = document.createElement('style');
        style.id = 'floating-styles';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Typing Effect for Hero Title
function typewriterEffect() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.style.borderRight = '2px solid var(--accent)';
    
    let i = 0;
    const speed = 100;
    
    function type() {
        if (i < originalText.length) {
            titleElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                titleElement.style.borderRight = 'none';
            }, 500);
        }
    }
    
    setTimeout(type, 1000);
}

// Easter Egg: Binah Well Meme on Profile Picture Rapid Clicks
function setupProfileEasterEgg() {
    const avatar = document.querySelector('.avatar');
    if (!avatar) return;
    
    let clickCount = 0;
    let clickTimer = null;
    const requiredClicks = 5;
    const timeWindow = 2000; // 2 seconds
    
    avatar.addEventListener('click', function() {
        clickCount++;
        
        // Clear existing timer
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
        
        // Check if we've reached the required clicks
        if (clickCount >= requiredClicks) {
            showBinahWellMeme();
            clickCount = 0;
            return;
        }
        
        // Reset counter after time window
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, timeWindow);
    });
}

function showBinahWellMeme() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create meme container
    const memeContainer = document.createElement('div');
    memeContainer.style.cssText = `
        text-align: center;
        animation: bounceIn 0.5s ease;
    `;
    
    // Create meme image
    const memeImage = document.createElement('img');
    memeImage.src = 'images/binah_well.jpg';
    memeImage.alt = 'Binah Well Meme';
    memeImage.style.cssText = `
        max-width: 80vw;
        max-height: 80vh;
        border-radius: 12px;
        border: 3px solid var(--accent);
        box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
    `;
    
    // Create text
    const memeText = document.createElement('p');
    memeText.textContent = 'Well...';
    memeText.style.cssText = `
        color: var(--accent);
        font-size: 2rem;
        font-weight: 600;
        margin-top: 1rem;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    `;
    
    // Create close instruction
    const closeText = document.createElement('p');
    closeText.textContent = 'Click anywhere to close';
    closeText.style.cssText = `
        color: var(--text-secondary);
        font-size: 1rem;
        margin-top: 0.5rem;
        opacity: 0.7;
    `;
    
    // Assemble elements
    memeContainer.appendChild(memeImage);
    memeContainer.appendChild(memeText);
    memeContainer.appendChild(closeText);
    overlay.appendChild(memeContainer);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes bounceIn {
            0% { transform: scale(0.3) rotate(-3deg); opacity: 0; }
            50% { transform: scale(1.05) rotate(1deg); }
            70% { transform: scale(0.95) rotate(-1deg); }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(overlay);
    
    // Close on click
    overlay.addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(overlay);
            document.head.removeChild(style);
        }, 300);
    });
    
    // Add fadeOut animation
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(fadeOutStyle);
}

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth entrance animation to main sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
    });
    
    // Animate sections as they come into view
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // Initialize all effects
    animateProjectCards();
    animateContactCards();
    animateInterests();
    parallaxEffect();
    addHoverEffects();
    createFloatingElements();
    typewriterEffect();
    setupProfileEasterEgg(); // Add the easter egg!
});

// Mobile responsive enhancements
function handleMobileView() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Reduce parallax effect on mobile for better performance
        document.querySelector('.hero-image')?.style.setProperty('transform', 'none');
        
        // Simplify animations on mobile
        const cards = document.querySelectorAll('.project-card, .contact-card');
        cards.forEach(card => {
            card.style.transition = 'all 0.3s ease';
        });
    }
}

window.addEventListener('resize', handleMobileView);
window.addEventListener('load', handleMobileView);
