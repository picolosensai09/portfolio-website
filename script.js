const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    mobileMenuBtn.textContent = navLinks.classList.contains('mobile-open') ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileMenuBtn.textContent = '☰';
    });
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        mobileMenuBtn.textContent = '☰';
    }
});

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

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    skillObserver.observe(card);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || 'New Contact Form Submission';
    const message = formData.get('message');
    
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const mailtoLink = `mailto:parashsahu024@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '✅ Message Sent!';
    submitBtn.style.background = 'var(--success)';
    
    this.reset();
    
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
    }, 3000);
});

document.querySelectorAll('.project-card, .skill-card, .experience-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

const subtitleElement = document.querySelector('.hero-text .subtitle');
const subtitles = [
    'Full-Stack Developer & Problem Solver',
    'Java Enthusiast & Web Developer',
    'Creative Coder & Tech Explorer',
    'Building Digital Solutions'
];
let currentSubtitle = 0;

function changeSubtitle() {
    if (subtitleElement) {
        subtitleElement.style.opacity = '0';
        setTimeout(() => {
            currentSubtitle = (currentSubtitle + 1) % subtitles.length;
            subtitleElement.textContent = subtitles[currentSubtitle];
            subtitleElement.style.opacity = '1';
        }, 500);
    }
}

setTimeout(() => {
    setInterval(changeSubtitle, 4000);
}, 3000);

document.querySelectorAll('.btn, .project-link, .social-link, .nav-links a').forEach(element => {
    element.style.cursor = 'pointer';
});

console.log(`
🚀 Welcome to Parash Kumar Sahu's Portfolio!

This website was built with:
- Pure HTML5, CSS3, and JavaScript
- Modern design principles
- Responsive layout
- Smooth animations
- Interactive elements

Interested in the code? Let's connect!
📧 parashsahu024@gmail.com
💼 linkedin.com/in/parashkumarsahu
`);