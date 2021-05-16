import '../sass/main.scss';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'



/**
 * AOS COntrol Block
 */
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


/** 
 * Parallax Control Block 
 */
import Rellax from 'rellax';

if(jQuery('.rellax').length != 0){
    let rellax = new Rellax('.rellax', {});
}


/**
 * Fixed Top Bar
 */

jQuery(document).ready(function(){
    if(jQuery(window).scrollTop() >= jQuery('.top-banner').height())
        jQuery('.navbar').addClass('fixed');
    else
        jQuery('.navbar').removeClass('fixed');
})

jQuery(window).scroll(function (){
    if(jQuery(this).scrollTop() >= jQuery('.top-banner').height())
        jQuery('.navbar').addClass('fixed');
    else
        jQuery('.navbar').removeClass('fixed');
})


/**
 * Menu Responsive
 */

let md = 720;

// Menu Position

let topMenu = jQuery('.top-menu');
let topBannerInfo = jQuery('.top-banner__info');



if(jQuery(window).width() <= md){
    jQuery('.sidebar__content').append(topMenu);
    jQuery('.sidebar__content').append(topBannerInfo);
    jQuery('.menu-open').removeClass('d-hide');
} else {
    jQuery('.navbar div.container>a').after(topMenu);
    jQuery('.top-banner .top-banner__logo').after(topBannerInfo);
}



jQuery(window).on('resize', () => {
    if(jQuery(window).width() <= md){
        jQuery('.sidebar__content').append(topMenu);
        jQuery('.sidebar__content').append(topBannerInfo);
        jQuery('.menu-open').removeClass('d-hide');
    } else {
        jQuery('.navbar div.container>a').after(topMenu);
        jQuery('.top-banner .top-banner__logo').after(topBannerInfo);
        jQuery('.menu-open').addClass('d-hide');
    }
})

jQuery(document).ready(function(){
    topMenu.removeClass('d-hide');
    topBannerInfo.removeClass('d-hide');
    if(jQuery(window).width() <= md){
        jQuery('.menu-open').removeClass('d-hide');
    } 


    jQuery('.menu-open').click(function() {
        jQuery('.navbar').toggleClass('open');
    })
    
})

 


