$(document).ready( function() {
  $(".page-header__button-open").click( function () {
    $("body").addClass("no-scroll");
    $(".main-menu").fadeIn(300);
  });

  $(".main-menu__button-close").click( function () {
    $("body").removeClass("no-scroll");
    $(".main-menu").fadeOut(300);
  });

    $(".page-reviews__list").slick({
      item: 1,
      fade: true,
      dots: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 669,
          settings: {
            arrows: false
          }
        }]
    });

    $(".page-price__button").click( function(event) {
      event.preventDefault();
      $("body").addClass("no-scroll");
      $(".modal").addClass("scroll");
      $(".modal").fadeIn(300);
    });

    $(".modal__btn-close").click( function() {
      $("body").removeClass("no-scroll");
      $(".modal").removeClass("scroll");
      $(".modal").fadeOut(300);
    });

    $(".page-header__button").click( function(event) {
      event.preventDefault();
      var distance = $("#schedule").offset().top;
      $("html, body").animate({scrollTop: distance }, 1500);
    });

    $("#link1").click( function(event) {
      event.preventDefault();
      $("body").removeClass("no-scroll");
      $(".main-menu").fadeOut(300);
      var distance = $("#about-pilates").offset().top;
      $("html, body").animate({scrollTop: distance }, 1000);
    });

    $("#link2").click( function(event) {
      event.preventDefault();
      $("body").removeClass("no-scroll");
      $(".main-menu").fadeOut(300);
      var distance = $("#schedule").offset().top;
      $("html, body").animate({scrollTop: distance }, 1500);
    });

    $("#link3").click( function(event) {
      event.preventDefault();
      $("body").removeClass("no-scroll");
      $(".main-menu").fadeOut(300);
      var distance = $("#practice").offset().top;
      $("html, body").animate({scrollTop: distance }, 1500);
    });

    $("#link4").click( function(event) {
      event.preventDefault();
      $("body").removeClass("no-scroll");
      $(".main-menu").fadeOut(300);
      var distance = $("#reviews").offset().top;
      $("html, body").animate({scrollTop: distance }, 1500);
    });

    $("#link5").click( function(event) {
      event.preventDefault();
      $("body").removeClass("no-scroll");
      $(".main-menu").fadeOut(300);
      var distance = $("#contacts").offset().top;
      $("html, body").animate({scrollTop: distance }, 1700);
    });
});
