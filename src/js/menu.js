$(document).ready(function(){
    $(".nav-menu_content-box_mobile").click(function(e) {
        e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
        // Ẩn het toan bo nhung thang khac
        var navsub = $(this).find(".header-nav-menu_content-sub_mobile");
        if($(this).hasClass('selected') == false) {
            $(".nav-menu_content-box_mobile.selected").removeClass('selected').find('.header-nav-menu_content-sub_mobile').slideUp('swing');
            $(this).addClass('selected');
            navsub.fadeIn('swing');
        } else {
            $(".nav-menu_content-box_mobile.selected").removeClass('selected').find('.header-nav-menu_content-sub_mobile').slideUp('swing');
        } 
    })
    $(".nav-menu_content-box_mobile").click(function(){
        let navIconMobile = $(this).find(".icon-menu_mobile");
        let navIconsMobile = $(".nav-menu_content-box_mobile").find(".icon-menu_mobile");
        if($(this).hasClass('selected') == false){
            navIconMobile.removeClass('show-icon');
        } else{
            navIconsMobile.removeClass('show-icon');
            navIconMobile.addClass('show-icon');            
        }
    })
    $('.btn-menu_mobile').click(function(){
        $(".menu-mobile").addClass('show-menu_mobile');
        $(".bg-wrapper").addClass('show-bg-wrapper');
        $("body").css('overflow','hidden');
        $("#logo-header").css('opacity','0');
    })
    $(window).click(function (e) {
        if (event.target.className == "bg-wrapper show-bg-wrapper") {
            $(".bg-wrapper").removeClass("show-bg-wrapper");
            $(".menu-mobile").removeClass('show-menu_mobile');
            $("body").css('overflow','auto');
            $("#logo-header").css('opacity','1');
        }
    });
});