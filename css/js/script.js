// Mobile nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger?.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
  burger.classList.toggle('open');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id !== '#') {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior:'smooth', block:'start' });
      mobileNav.style.display = 'none';
    }
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
