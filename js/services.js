window.onload = function () {
    document.querySelector('.loader').classList.add('is-active');
    setTimeout(function () {
      document.querySelector('.loader').style.display = 'none';
    }, 850);
  };

const servicesPageSwiper = new Swiper('.services-page-swiper', {
    slidesPerView: 6,
    loop: true,
    clickable: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2000
    }
  });

const heroBtns = document.querySelectorAll('.btn');
const popup = document.querySelector('.record');

heroBtns.forEach((btn) => {btn.addEventListener('click', () => {popup.classList.add('active-rec');})})

popup.addEventListener('click', (e) => {
  if (e.target.classList.contains('record__body')) {
    popup.classList.remove('active-rec');
  }
})