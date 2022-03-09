window.onload = function () {
  document.querySelector('.loader').classList.add('is-active');
  setTimeout(function () {
    document.querySelector('.loader').style.display = 'none';
  }, 850);
};

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const headerHeight = header.offsetHeight;
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > headerHeight) {
    header.classList.add('op');
  } else {
    header.classList.remove('op');
  }

  if (scrollDistance >= heroHeight) {
    header.classList.add('js-fixed');
    hero.style.marginTop = headerHeight + 'px';
  } else {  
    header.classList.remove('js-fixed');
    hero.style.marginTop = '';
  }
})

const servicesSwiper = new Swiper('.services-swiper', {
  slidesPerView: 6,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  }
});

const servicesPageSwiper = new Swiper('.services-page-swiper', {
  slidesPerView: 6,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  }
});


const work1Swiper = new Swiper('.work-swiper-1', {
  slidesPerView: 6,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  }
});


const work2Swiper = new Swiper('.work-swiper-2', {
  navigation: {
    nextEl: '.work-swiper-2-button-next',
    prevEl: '.work-swiper-2-button-prev'
  },
  slidesPerView: 1,
  clickable: true,
  loop: true,
  pagination: {
    el: '.work-pag',
    type: 'bullets',
  },
});

ymaps.ready(init);
  function init() {
    var contactsMap = new ymaps.Map("address-left", {
      center: [55.7612915, 37.6194496],
      zoom: 17,
    });
    (myPlacemark = new ymaps.Placemark(
      contactsMap.getCenter(),
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/location.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-5, -38],
      }
    )),
      contactsMap.geoObjects.add(myPlacemark);
  }

  const heroBtns = document.querySelectorAll('.btn');
  const popup = document.querySelector('.record');
  
  heroBtns.forEach((btn) => {btn.addEventListener('click', () => {popup.classList.add('active-rec');})})
  
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('record__body')) {
      popup.classList.remove('active-rec');
    }
  })


