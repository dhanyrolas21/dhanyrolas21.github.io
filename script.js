// JavaScript untuk interaktivitas website portofolio

// Toggle menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Tutup menu mobile saat link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Efek scroll header
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil nilai form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validasi sederhana
            if (!name || !email || !subject || !message) {
                alert('Harap isi semua field!');
                return;
            }
            
            // Simulasi pengiriman form
            console.log('Form Data:', { name, email, subject, message });
            
            // Tampilkan pesan sukses
            alert('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animasi scroll halus untuk semua link anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animasi saat elemen masuk ke viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Terapkan animasi ke beberapa elemen
    document.querySelectorAll('.biodata-card, .timeline-item, .about-content').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Tambahkan CSS untuk animasi
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .biodata-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .biodata-card:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .timeline-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .timeline-item:nth-child(4) {
            transition-delay: 0.6s;
        }
    `;
    document.head.appendChild(style);
});