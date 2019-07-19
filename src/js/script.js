const seeMoreIcon = document.getElementById('seeMore');
let scrolled = false;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.pageYOffset > (window.innerHeight )) {
    navbar.classList.add('transition')

  } else {
    navbar.classList.remove('transition')
  }

  if (window.pageYOffset < 18 && !scrolled) {
    window.scrollTo(0, window.innerHeight)
    scrolled = true;
  }
})

seeMoreIcon.addEventListener('click', () => {
  window.scrollTo(0, window.innerHeight)
})
