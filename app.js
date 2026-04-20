// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu on link click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle?.querySelectorAll('span');
        if (spans) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Modal functions
function showInstallmentModal() {
    const modal = document.getElementById('installmentModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInstallmentModal() {
    const modal = document.getElementById('installmentModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeInstallmentModal();
    }
});

// Form submission
function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const phone = formData.get('phone');
    
    // Simple validation
    if (!name || !phone) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[\+\d\s\-\(\)]{10,20}$/;
    if (!phoneRegex.test(phone)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }
    
    // Success message
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время для оформления рассрочки.');
    
    // Reset form and close modal
    form.reset();
    closeInstallmentModal();
}

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll('.benefit-card, .carousel-container, .about-image, .about-content');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky nav shadow on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
        nav.style.boxShadow = '0 4px 30px rgba(212, 160, 50, 0.18)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Carousel functionality
const carousel = {
    slides: document.querySelectorAll('.carousel-slide'),
    dots: document.querySelectorAll('.carousel-dot'),
    track: document.querySelector('.carousel-track'),
    currentSlide: 0,
    totalSlides: 10,
    autoplayInterval: null,
    
    init() {
        if (!this.track) return;
        
        // Event listeners for buttons
        document.querySelector('.carousel-prev')?.addEventListener('click', () => this.prev());
        document.querySelector('.carousel-next')?.addEventListener('click', () => this.next());
        
        // Event listeners for dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
        
        // Autoplay
        this.startAutoplay();
        
        // Pause on hover
        const container = document.querySelector('.carousel-container');
        container?.addEventListener('mouseenter', () => this.stopAutoplay());
        container?.addEventListener('mouseleave', () => this.startAutoplay());
    },
    
    updateSlide() {
        // Update track position
        this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        
        // Update slides classes
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    },
    
    next() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlide();
    },
    
    prev() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlide();
    },
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlide();
    },
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) this.next();
            else this.prev();
        }
    },
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => this.next(), 4000);
    },
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
};

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
});

// Phone input mask
document.getElementById('phone')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.startsWith('7') || value.startsWith('8')) {
        value = value.substring(1);
    }
    
    if (value.length > 0) {
        let formatted = '+7';
        if (value.length > 0) {
            formatted += ' (' + value.substring(0, 3);
        }
        if (value.length >= 3) {
            formatted += ') ' + value.substring(3, 6);
        }
        if (value.length >= 6) {
            formatted += '-' + value.substring(6, 8);
        }
        if (value.length >= 8) {
            formatted += '-' + value.substring(8, 10);
        }
        e.target.value = formatted;
    } else {
        e.target.value = '';
    }
});

console.log('Nina Nail Courses - Website initialized');
