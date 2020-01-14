"use strict";

$(document).ready(function () {
  $('.btn-delete-item_cart').click(function () {
    $(this).parents('.product-item_cart').addClass('d-none');
    console.log("à há");
  });
});