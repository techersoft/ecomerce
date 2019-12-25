"use strict";

var btnShowControl = $('#btn-show-controls');
var conceptControl = $('#nav-controls-concept');
var btnControlTag = $('#btn-control-tags');
var itemTag = $('.tag-item');
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
});