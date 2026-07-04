(() => {
  'use strict';

  document.documentElement.classList.add('js-ready');

  /* Header scroll state */
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile drawer */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const drawerOverlay = document.getElementById('drawerOverlay');

  const openDrawer = () => {
    mobileMenu.setAttribute('data-open', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    drawerOverlay.setAttribute('data-open', 'true');
    drawerOverlay.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileMenu.setAttribute('data-open', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    drawerOverlay.setAttribute('data-open', 'false');
    drawerOverlay.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeDrawer() : openDrawer();
  });
  drawerOverlay.addEventListener('click', closeDrawer);
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* Fixed mobile CTA — hide while hero is in view */
  const fixedCta = document.getElementById('fixedCta');
  const hero = document.querySelector('.hero');
  if (fixedCta && hero && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        fixedCta.setAttribute('data-hidden', entry.isIntersecting ? 'true' : 'false');
      },
      { threshold: 0.15 }
    );
    heroObserver.observe(hero);
  }

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll('.r');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }
})();
