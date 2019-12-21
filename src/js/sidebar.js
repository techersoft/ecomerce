$(document).ready(function(){
    $('.menu-icon-btn').click(function(e){
        e.stopPropagation();
        var subMenu = $(this).parent().next();
        subMenu.toggleClass('d-block')
        $(this).toggleClass('rotate')
    })


    $('.filter-header').click(function(){
        $(this).next().toggleClass('d-none')
        $(this).find('.menu-icon').toggleClass('rotate')
    })
})