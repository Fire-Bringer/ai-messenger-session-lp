document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline(); // Create a timeline to chain animations

  // Animate the background first
  tl.from('.hero__right .background', {
    opacity: 0, // Make the background fade in
    y: 50,
    duration: 1.5,
    ease: 'power2.out'
  })

  // Animate hero-img1 after the background
  .from('.hero-img1', {
    opacity: 0,
    y: -50, // Move slightly left
    duration: 1.25,
    ease: 'power2.out'
  })

  // Animate hero-img2 after hero-img1
  .from('.hero-img2', {
    opacity: 0,
    x: 50, // Move slightly right
    duration: 1.25,
    ease: 'power2.out'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  const menuIcon = menuBtn.querySelector('i'); // Get the icon element inside the button

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // Toggle the open class to show/hide the links

    // Toggle between burger and "X" icon
    if (navLinks.classList.contains('open')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-x'); // Change to the "X" icon
    } else {
      menuIcon.classList.remove('fa-x');
      menuIcon.classList.add('fa-bars'); // Change back to the burger icon
    }
  });
});

