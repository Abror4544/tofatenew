$(function () {
  var swiper = new Swiper(".girlSwiper", {
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".girls-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".girls-button-next",
      prevEl: ".girls-button-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1199: {
        slidesPerView: 1.7,
        spaceBetween: 85,
      },
      1730: {
        spaceBetween: 225,
        slidesPerView: 3,
      }
    }
  });

  var swiper = new Swiper(".bannerSwiper", {
    centeredSlides: true,
    loop: true,
    spaceBetween: 298,
    pagination: {
      el: ".banners-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".banners-button-next",
      prevEl: ".banners-button-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2.4,
      }
    }
  });

  var swiper = new Swiper(".screenSwiper", {
    loop: false,
    spaceBetween: 21,
    breakpoints: {
      280: {
        slidesPerView: 2.8,
      },
      767: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 7,
      }
    }
  });

  var swiper = new Swiper(".modelSwiper", {
    loop: false,
    pagination: {
      el: ".dots",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".model-button-next",
      prevEl: ".model-button-prev",
    },
  });


  let text = $(".girls-pagination").text();
  let result = text.replace("/", "из");
  let slides = $(".girlSwiper .swiper-slide").length;
  let duplicate = $(".girlSwiper .swiper-slide-duplicate").length
  $(".girls-pagination").html(
    `<span class="swiper-pagination-current">1</span> ${result[2]+result[3]} <span class="swiper-pagination-total">${slides-duplicate}</span>`
  );

  let target = document.querySelectorAll(".footer-menu__title");
  let menu = document.querySelectorAll(".footer-menu__list");

  for (let i = 0; i < target.length; i++) {
    target[i].addEventListener("click", () => {
      if (menu[i].classList.contains("active")) {
        menu[i].classList.remove("active");
      } else {
        menu[i].classList.add("active");
      }
    });
  }

  $(".bar").click(() => {
    $(".header-menu").css("left", "0");
    $("body").addClass("fixed");
  });
  $(".close").click(() => {
    $(".header-menu").css("left", "-100%");
    $("body").removeClass("fixed");
  });
});
