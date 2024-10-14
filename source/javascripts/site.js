document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline(); // Create a timeline to chain animations

  // Animate tent-1
  tl.from('.tent-1', {
    opacity: 0,
    x: -50, // Move slightly left
    duration: 1,
    ease: 'power2.out'
  })
  // Stagger animate tent-2
  .from('.tent-2', {
    opacity: 0,
    x: 50, // Move slightly right
    duration: 1,
    ease: 'power2.out'
  }, "-=0.5") // Overlap the animation by 0.5 seconds

  // Animate the background div (formerly ::before)
  .from('.container__right .background', {
    width: 0,
    duration: 1.25,
    ease: 'power2.out'
  }, "-=0.5") // Overlap the animation

  // Finally animate the content
  .from('.container__right .content', {
    opacity: 0,
    y: 20, // Slide the content slightly upwards
    duration: 1.5,
    ease: 'power2.out',
    display: 'block',
    onStart: function() {
      document.querySelector('.container__right .content').style.display = 'block';
    }
  }, "-=0.5"); // Overlap the content animation
});
