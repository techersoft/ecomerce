"use strict";

var btnShowControl = $('#btn-show-controls');
var conceptControl = $('#nav-controls-concept');
var btnControlTag = $('#btn-control-tags');
var itemTag = $('.tag-item');
var moreProduct = $('.more-product');
var carouselProduct = $('.carousel-product');
var hideProduct = $('.hide-product');
var menuConcept = $('.left-menu li');
$(document).ready(function () {
  btnShowControl.click(function (e) {
    conceptControl.toggleClass('d-block');
  });
  btnControlTag.click(function () {
    itemTag.toggleClass('d-none');

    if ($(this).children().prev().hasClass('color-green')) {
      $(this).children().prev().addClass('color-default');
      $(this).children().prev().removeClass('color-green');
      $(this).find('span').html('Show tags');
    } else if ($(this).children().prev().hasClass('color-default')) {
      $(this).find('span').html('Hide tags');
      $(this).children().prev().removeClass('color-default');
      $(this).children().prev().addClass('color-green');
    }
  });
  itemTag.click(function () {
    carouselProduct.toggleClass('height-down');
    moreProduct.toggleClass('show-more-product');
  });
  hideProduct.click(function () {
    moreProduct.removeClass('show-more-product');
    carouselProduct.removeClass('height-down');
  }); // window.click(function(){
  // })

  menuConcept.click(function () {
    $(this).children().addClass('active-concept');
    $(this).siblings().children().removeClass('active-concept');
  });
});