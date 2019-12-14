"use strict";

$(document).ready(function () {
  $(".nav-box").click(function (e) {
    e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
    // Ẩn het toan bo nhung thang khac

    var navsub = $(this).find(".menu-accordion__sub-items");

    if ($(this).hasClass('selected') == false) {
      $(".nav-box.selected").removeClass('selected').find('.menu-accordion__sub-items').slideUp('swing');
      $(this).addClass('selected');
      navsub.fadeIn('swing');
    } else {
      $(".nav-box.selected").removeClass('selected').find('.menu-accordion__sub-items').slideUp('swing');
    }
  });
  $(".nav-box").click(function () {
    var navsubIcon = $(this).find(".icon-sub-menu");
    var navsubIcons = $(".nav-box").find(".icon-sub-menu");

    if ($(this).hasClass('selected') == false) {
      navsubIcon.removeClass('show-icon');
    } else {
      navsubIcons.removeClass('show-icon');
      navsubIcon.addClass('show-icon');
    }
  });
  $('.op-menu').click(function () {
    $(".nav-box").find('.menu-accordion__sub-items').slideUp('fast');
    $(this).toggleClass('clo-menu');

    if ($('.wrapper-sub-menu').hasClass('show-sub-menu') == false) {
      $('.wrapper-sub-menu').addClass('show-sub-menu');
    } else {
      $('.wrapper-sub-menu').removeClass('show-sub-menu');
    }
  });
});