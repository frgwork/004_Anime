window.addEventListener('load', () => {

  const container = document.querySelector('.container');

  for (let i = 0; i < 20; i++) {
    const hearts = document.createElement('div');
    hearts.classList.add('heart');
    container.appendChild(hearts);
  };

  function animateHearts() {
    anime({
      targets: '.heart',
      translateX: function() {
        return anime.random(-300, 300);
      },
      translateY: function() {
        return anime.random(-300, 300);
      },
      rotate: 45,
      scale: function() {
        return anime.random(1, 3);
      },
      easing: 'easeInOutQuad',
      duration: 3000,
      delay: anime.stagger(10),
      complete: animateHearts,
    });
  }

  animateHearts();
})
