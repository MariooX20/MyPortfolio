/* =====================================================
   Mario Nagy Portfolio - script.js
   ===================================================== */

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNavLink();
});

// ---- Typing animation ----
const titles = ['Software Engineer', 'Backend Developer', '.NET Specialist', 'Problem Solver'];
let titleIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typing-text');

function type() {
  if (!typingEl) return;
  const current = titles[titleIndex];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
  }

  const speed = isDeleting ? 60 : 110;
  setTimeout(type, speed);
}
setTimeout(type, 1200);

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (entry.target.dataset.delay || 0));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ---- Active nav link ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? '#f0f0ff'
      : '';
  });
}

// ---- Smooth scroll for all anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile menu if open
      const navCollapse = document.getElementById('navbarNav');
      if (navCollapse && navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
      }
    }
  });
});

// ---- Skill pill interactive glow ----
document.querySelectorAll('.skill-pill').forEach(pill => {
  pill.addEventListener('mouseenter', () => {
    pill.style.boxShadow = '0 0 18px rgba(124,58,237,0.35)';
  });
  pill.addEventListener('mouseleave', () => {
    pill.style.boxShadow = '';
  });
});

// ---- Particles background (hero) ----
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#a78bfa';
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 90; i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });

    // Draw connections
    particles.forEach((p, i) => {
      particles.slice(i + 1).forEach(q => {
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 100) * 0.15;
          ctx.strokeStyle = '#7c3aed';
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });

    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}
