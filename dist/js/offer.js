"use strict";

$(document).ready(function () {
  $('.btn-see-details').click(function () {
    var $this = $(this);

    if ($('.details-supplier').hasClass('show-details')) {
      $('.details-supplier').removeClass('show-details');
      $this.siblings('.details-supplier').addClass('show-details');
    } else {
      $this.siblings('.details-supplier').addClass('show-details');
    }
  });
  $('.btn-close-details-supplier').click(function () {
    $('.details-supplier.show-details').removeClass('show-details');
  });
});