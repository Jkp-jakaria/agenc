/* =====banner_slider start===== */

$('#banner_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

/* =====banner_slider end===== */


/* =====client_slider start===== */

  $('.client_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="prev fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="next fa-solid fa-angle-right"></i>',
    responsive: [
    {
        breakpoint: 1319.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  /* =====client_slider end===== */

  /* =====back to top===== */

  var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

  /* =====back to top===== */

  /* =====plugin start===== */

  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

/* =====plugin end===== */

/* =====counter start===== */

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

/* =====counter end===== */