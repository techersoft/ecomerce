$(document).ready(function () {
    var productItem = $('.product-item-slider');
    var productList = $('.product-list-slider');
    $('.product-item').get().forEach(function (item) {
        let thumbnailItem = $(item).find(".thumbnail-item");
        let productItemImage = $(item).find('.product-item-image img')
        thumbnailItem.on('click', function (e) {
            e.stopPropagation();
            thumbnailItem.removeClass('active');
            $(this).addClass('active');
            let imgSrc = $(this).children('img').attr('src');
            if ($(this).children('img').attr('src') === productItemImage.attr("src")) {
                return;
            } else {
                productItemImage.attr("src", imgSrc);
            }

        })
    })
    $('.product-item-badges .status').on('click', function (e) {
        $(this).toggleClass('like unlike');
    })
});