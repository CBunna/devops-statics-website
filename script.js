// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

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

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 35, 126, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 35, 126, 0.95)';
    }
});

// Typing Animation for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typeWriter(typingElement, 'DevOps Engineer', 150);
    }
});

// DevOps Cycle Animation
document.querySelectorAll('.cycle-item').forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        // Add pulse animation
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.transition = 'all 0.3s ease';
        
        // Highlight the item
        this.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.3)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
    
    // Animate items on scroll
    item.style.animationDelay = `${index * 0.1}s`;
});

// Terminal Command Animation
function animateTerminalCommands() {
    const commands = [
        'kubectl get pods --all-namespaces',
        'terraform apply -auto-approve',
        'docker build -t myapp:latest .',
        'git push origin main',
        'helm install app ./chart',
        'ansible-playbook deploy.yml'
    ];
    
    const commandElements = document.querySelectorAll('.command');
    let currentIndex = 0;
    
    function updateCommand() {
        if (commandElements.length > 0) {
            commandElements.forEach((element, index) => {
                if (index < commands.length) {
                    element.textContent = commands[(currentIndex + index) % commands.length];
                }
            });
            currentIndex = (currentIndex + 1) % commands.length;
        }
    }
    
    // Update commands every 3 seconds
    setInterval(updateCommand, 3000);
}

// Start terminal animation
animateTerminalCommands();

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .cycle-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Statistics Counter Animation
function animateCounters() {
    const stats = document.querySelectorAll('.stat h4');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '%';
        }, 20);
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const terminal = document.querySelector('.terminal');
    
    if (hero && terminal) {
        // Parallax effect
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        terminal.style.transform = `translateY(${scrolled * -0.3}px)`;
    }
});

// Add Loading Animation
window.addEventListener('load', function() {
    // Hide loading spinner if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
    
    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            heroVisual.style.transition = 'opacity 1s ease, transform 1s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'translateX(0)';
        }, 800);
    }
});

// Add Easter Egg - Konami Code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length) {
        if (konamiCode.every((code, index) => code === konamiSequence[index])) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                alert('🎉 Konami Code activated! You found the DevOps Easter egg!');
            }, 2000);
            konamiCode = [];
        }
    }
});

// CSS for rainbow animation (injected via JavaScript)
const rainbowCSS = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}
`;

const style = document.createElement('style');
style.textContent = rainbowCSS;
document.head.appendChild(style);

// Performance monitoring
console.log('🚀 DevOps Portfolio loaded successfully!');
console.log('🛠️ Built with vanilla JavaScript, CSS3, and HTML5');
console.log('📊 Performance metrics:');
console.log(`⏱️ Page load time: ${performance.now().toFixed(2)}ms`);

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker would be registered here in production
        console.log('💼 Ready for service worker registration');
    });
}