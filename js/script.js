$('.top-slider__wrap').slick({
    speed: 500,
    infinite: false,
    dots: true,
    appendDots: '.top-slider__wrap',
    dotsClass: 'slider__dots',
    arrows: true,
    appendArrows: '.top-slider__wrap',
    prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
    nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
});

$('.about__slider').slick({
    speed: 500,
    dots: true,
    appendDots: '.about__slider',
    dotsClass: 'slider__dots',
    arrows: false,
    infinite: false,
});

$('.blog__wrap').slick({
    speed: 500,
    dots: false,
    arrows: true,
    infinite: false,
    appendArrows: '.blog__wrap',
    prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
    nextArrow: '<div class="slider_arrow slider_arrow--right"></div>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 450,
            settings: {
              slidesToShow: 1.5,
            }
        }
    ],
});



$('.catalog-inner .catalog__wrap').slick({
    speed: 500,
    dots: false,
    arrows: true,
    appendArrows: '.catalog-inner .catalog__wrap',
    prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
    nextArrow: '<div class="slider_arrow slider_arrow--right"></div>',
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
          breakpoint: 555,
          settings: {
            slidesToShow: 1.4,
          }
        },
        {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
            }
        }
    ],
});

$(function() {
    $(".beforeafter__block").twentytwenty({
        no_overlay: true,
    });
});

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  if (screen.width < 550) {
    $('.catalog__wrap').slick({
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 390,
              settings: {
                slidesToShow: 1.1,
              }
            },
        ],
    })
};

$(function() {
    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
            // удалим у кнопки класс btn-up_hide
            this.el.classList.remove('btn-up_hide');
        },
        hide() {
            // добавим к кнопке класс btn-up_hide
            this.el.classList.add('btn-up_hide');
        },
        addEventListener() {
            // при прокрутке содержимого страницы
            window.addEventListener('scroll', () => {
                // определяем величину прокрутки
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
                scrollY > 400 ? this.show() : this.hide();
            });
            // при нажатии на кнопку .btn-up
            document.querySelector('.btn-up').onclick = () => {
                // переместим в начало страницы
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

});

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');