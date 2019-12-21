"use strict";

$(document).ready(function () {
  var productItem = $('.product-item-slider');
  var productList = $('.product-list-slider');
  $('.product-item').get().forEach(function (item) {
    var thumbnailItem = $(item).find(".thumbnail-item");
    var productItemImage = $(item).find('.product-item-image img');
    thumbnailItem.on('click', function (e) {
      e.stopPropagation();
      thumbnailItem.removeClass('active');
      $(this).addClass('active');
      var imgSrc = $(this).children('img').attr('src');

      if ($(this).children('img').attr('src') === productItemImage.attr("src")) {
        return;
      } else {
        productItemImage.attr("src", imgSrc);
      }
    });
  });
  $('.product-item-badges .status').on('click', function (e) {
    $(this).toggleClass('like unlike');
  });
  $('.owl-carousel-2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 4,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 750
  });
});