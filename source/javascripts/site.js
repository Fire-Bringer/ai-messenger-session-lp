document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Timeline animations for hero section
  const tl = gsap.timeline();

  // Animate the background first
  tl.from('.hero__right .background', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out'
  })
  .from('.hero-img1', {
    opacity: 0,
    y: -50,
    duration: 1.25,
    ease: 'power2.out'
  })
  .from('.hero-img2', {
    opacity: 0,
    x: 50,
    duration: 1.25,
    ease: 'power2.out'
  });

  // Navbar menu button toggle logic
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  const menuIcon = menuBtn.querySelector('i');
  const navBar = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-x');
    } else {
      menuIcon.classList.remove('fa-x');
      menuIcon.classList.add('fa-bars');
    }
  });

  // Close menu when a link is clicked
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuIcon.classList.remove('fa-x');
      menuIcon.classList.add('fa-bars');
    });
  });

  // Change navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll position threshold as needed
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  });

  // ScrollTrigger for fade-in animations
  const elements = document.querySelectorAll('.animation-show');

  elements.forEach(element => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });
});
