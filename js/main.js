/*  ---------------------------------------------------
    Template Name: Indi-Vastraa
    Description: Indi-Vastraa is a modern eCommerce HTML Template

----------------------------------------------------------  */

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
        Hero Slider
    --------------------*/
  $(".hero-items").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  /*------------------
        Product Slider
    --------------------*/
  $(".product-slider").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    items: 4,
    dots: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  /*------------------
       logo Carousel
    --------------------*/
  $(".logo-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    items: 5,
    dots: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    smartSpeed: 1200,
    autoHeight: false,
    mouseDrag: false,
    autoplay: true,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      },
    },
  });

  /*-----------------------
       Product Single Slider
    -------------------------*/
  $(".ps-slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    items: 3,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  /*------------------
        CountDown
    --------------------*/
  // For demo preview
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  if (mm == 12) {
    mm = "01";
    yyyy = yyyy + 1;
  } else {
    mm = parseInt(mm) + 1;
    mm = String(mm).padStart(2, "0");
  }
  var timerdate = mm + "/" + dd + "/" + yyyy;
  // For demo preview end

  console.log(timerdate);

  // Use this for real timer date
  /* var timerdate = "2020/01/01"; */

  $("#countdown").countdown(timerdate, function (event) {
    $(this).html(
      event.strftime(
        "<div class='cd-item'><span>%D</span> <p>Days</p> </div>" +
          "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" +
          "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" +
          "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"
      )
    );
  });

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
    $(this).css("--bg-url", "url(" + bg + ")"); // Optional, not needed in this case
  });
})(jQuery);
