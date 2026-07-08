/* ================================================================
   صفحه بارگذاری
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('loaderProgress');
    
    if (loader && progressBar) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 8 + 4;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    loader.classList.add('hidden');
                }, 400);
            }
            progressBar.style.width = Math.min(progress, 100) + '%';
        }, 120);
    }
});

/* ================================================================
   ناوبری
   ================================================================ */

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinksItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ================================================================
   منو - ۱۷ آیتم
   ================================================================ */

const menuData = [
    { id: 1, name: 'Classic Espresso', category: 'espresso', price: '85,000', desc: 'Single-origin Ethiopian beans, perfectly extracted.', img: 'Espresso.png' },
    { id: 2, name: 'Double Espresso', category: 'espresso', price: '105,000', desc: 'Double shot of intense, rich espresso.', img: 'double-espresso.png' },
    { id: 3, name: 'Caramel Latte', category: 'latte', price: '125,000', desc: 'Smooth espresso with steamed milk and caramel.', img: 'latte.png' },
    { id: 4, name: 'Vanilla Latte', category: 'latte', price: '120,000', desc: 'Classic latte with premium vanilla syrup.', img: 'iced-latte.png' },
    { id: 5, name: 'Signature Mocha', category: 'mocha', price: '135,000', desc: 'Rich chocolate and espresso harmony.', img: 'mocha.png' },
    { id: 6, name: 'Classic Cappuccino', category: 'cappuccino', price: '115,000', desc: 'Perfectly balanced espresso, steamed milk, and foam.', img: 'cappuccino.png' },
    { id: 7, name: 'Cold Brew', category: 'coldbrew', price: '110,000', desc: 'Smooth, slow-steeped cold brew coffee.', img: 'cold-brew.png' },
    { id: 8, name: 'Iced Americano', category: 'iced', price: '95,000', desc: 'Refreshing cold Americano with a citrus touch.', img: 'iced-americano.png' },
    { id: 9, name: 'Iced Latte', category: 'iced', price: '115,000', desc: 'Chilled latte with a silky smooth texture.', img: 'iced-latte.png' },
    { id: 10, name: 'Mango Smoothie', category: 'smoothie', price: '130,000', desc: 'Fresh mango blended with yogurt and honey.', img: 'mango-smoothie.png' },
    { id: 11, name: 'Oreo Milkshake', category: 'smoothie', price: '145,000', desc: 'Creamy milkshake with Oreo cookies.', img: 'oreo-milkshake.png' },
    { id: 12, name: 'Passion Fruit', category: 'smoothie', price: '140,000', desc: 'Tropical passion fruit with a tangy twist.', img: 'passion-fruit.png' },
    { id: 13, name: 'Blue Lagoon', category: 'smoothie', price: '150,000', desc: 'Refreshing blue lemonade with a vibrant color.', img: 'blue-lagoon.png' },
    { id: 14, name: 'Tiramisu', category: 'desserts', price: '160,000', desc: 'Classic Italian dessert with espresso-soaked layers.', img: 'tiramisu.png' },
    { id: 15, name: 'Lava Cake', category: 'desserts', price: '170,000', desc: 'Warm chocolate lava with a melting center.', img: 'lava-cake.png' },
    { id: 16, name: 'Croissant', category: 'breakfast', price: '90,000', desc: 'Buttery, flaky croissant made fresh daily.', img: 'croissant.png' },
    { id: 17, name: 'Flat White & Croissant', category: 'breakfast', price: '180,000', desc: 'Signature flat white with a freshly baked croissant.', img: 'flat-white.png' },
];

const menuGrid = document.getElementById('menuGrid');

function renderMenu() {
    if (!menuGrid) return;
    menuGrid.innerHTML = menuData.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.img}" alt="${item.name}" loading="lazy" />
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-desc">${item.desc}</p>
                <div class="menu-item-bottom">
                    <span class="menu-item-price">${item.price} T</span>
                    <button class="menu-item-order">Order</button>
                </div>
            </div>
        </div>
    `).join('');
}

renderMenu();

/* ================================================================
   گالری
   ================================================================ */

const galleryData = [
    { id: 1, img: 'hero.png', title: 'Luxury Interior' },
    { id: 2, img: 'Espresso.png', title: 'Coffee Art' },
    { id: 3, img: 'latte.png', title: 'Barista' },
    { id: 4, img: 'about.png', title: 'Coffee Beans' },
    { id: 5, img: 'tiramisu.png', title: 'Desserts' },
    { id: 6, img: 'cold-brew.png', title: 'Signature Drinks' },
    { id: 7, img: 'mocha.png', title: 'Cozy Atmosphere' },
    { id: 8, img: 'story.png', title: 'Morning Brew' },
];

const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentGalleryIndex = 0;

function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = galleryData.map((item, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${item.img}" alt="${item.title}" loading="lazy" />
            <div class="gallery-overlay">
                <span>${item.title}</span>
            </div>
        </div>
    `).join('');
}

if (galleryGrid) {
    galleryGrid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (!item) return;
        const index = parseInt(item.dataset.index);
        openLightbox(index);
    });
}

function openLightbox(index) {
    currentGalleryIndex = index;
    lightboxImage.src = galleryData[index].img;
    lightboxImage.alt = galleryData[index].title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentGalleryIndex = (currentGalleryIndex + direction + galleryData.length) % galleryData.length;
    lightboxImage.src = galleryData[currentGalleryIndex].img;
    lightboxImage.alt = galleryData[currentGalleryIndex].title;
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});

renderGallery();

/* ================================================================
   فرم رزرو
   ================================================================ */

const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fields = ['resName', 'resEmail', 'resPhone', 'resDate', 'resTime', 'resGuests'];
        let isValid = true;
        
        fields.forEach(id => {
            const input = document.getElementById(id);
            if (!input.value.trim()) {
                input.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (!isValid) return;
        
        const btn = reservationForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال پردازش...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '✓ رزرو با موفقیت انجام شد!';
            btn.style.background = '#2ecc71';
            btn.style.color = '#0a0a0a';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
                reservationForm.reset();
            }, 2500);
        }, 2000);
    });
}

/* ================================================================
   خبرنامه
   ================================================================ */

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        if (!input.value.trim()) return;
        
        const btn = newsletterForm.querySelector('button');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = '#2ecc71';
            btn.style.color = '#0a0a0a';
            input.value = '';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-arrow-right"></i>';
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 2000);
        }, 1200);
    });
}

/* ================================================================
   پیمایش نرم
   ================================================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ================================================================
   برندینگ
   ================================================================ */

console.log('%c ☕ Luxury Caffee ', 'font-size:20px; font-weight:bold; color:#D4AF37;');
console.log('%c Designed & Developed by Amir Web ', 'font-size:14px; color:#B8B8B8;');
console.log('%c Instagram: @Amir0Web.dev ', 'font-size:12px; color:#D4AF37;');
console.log('%c Phone: 09025131506 ', 'font-size:12px; color:#D4AF37;');
console.log('%c Available on WhatsApp & Rubika ', 'font-size:12px; color:#B8B8B8;');
console.log('%c © 2026 All Rights Reserved. ', 'font-size:10px; color:#666;');