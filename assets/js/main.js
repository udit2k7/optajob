/* OptaJob Website — Shared JS · optajob.com · Made by Udit Tandon */

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── MOBILE MENU ───────────────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-menu-close');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  document.querySelectorAll('.mobile-menu-links a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── FADE-UP ON SCROLL (Intersection Observer) ─────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── ANIMATED COUNTER ──────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ── PARTICLES (hero background) ───────────────────────────────────────
function createParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${6 + Math.random() * 6}s;
      width: ${2 + Math.random() * 3}px;
      height: ${2 + Math.random() * 3}px;
      opacity: ${0.3 + Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
}
createParticles();

// ── SMOOTH ACTIVE NAV ─────────────────────────────────────────────────
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.href.includes(path) && path !== '/') a.classList.add('active');
});

// ── COPY TO CLIPBOARD ─────────────────────────────────────────────────
window.copyText = function(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.style.background = '#16a34a';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 2000);
  });
};
