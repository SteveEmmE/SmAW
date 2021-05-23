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
    if(jQuery(window).scrollTop() >= jQuery('.top-banner').outerHeight())
        jQuery('.navbar').addClass('fixed');
    else
        jQuery('.navbar').removeClass('fixed');
})

jQuery(window).scroll(function (){
    if(jQuery(this).scrollTop() >= jQuery('.top-banner').outerHeight())
        jQuery('.navbar').addClass('fixed');
    else
        jQuery('.navbar').removeClass('fixed');
})

/**
 * Fixed category bar
 */

 jQuery(document).ready(function(){
    if(jQuery(window).scrollTop() >= jQuery('.top-banner').outerHeight()+jQuery('.categories-slider-fixed-trigger').outerHeight())
        jQuery('.category-slider').addClass('category-slider-fixed');
    else
        jQuery('.category-slider').removeClass('category-slider-fixed');
})

jQuery(window).scroll(function (){
    console.log(jQuery(window).scrollTop(), jQuery('.top-banner').outerHeight()+jQuery('.categories-slider-fixed-trigger').outerHeight())
    if(jQuery(window).scrollTop() >= jQuery('.top-banner').outerHeight()+jQuery('.categories-slider-fixed-trigger').outerHeight())
        jQuery('.category-slider').addClass('category-slider-fixed');
    else
        jQuery('.category-slider').removeClass('category-slider-fixed');
})


/**
 * Image Sliders
 */

 let sliders = jQuery('.image-container');

 Array.from(jQuery(sliders)).forEach((slider) => {
     let slides = Array.from(jQuery(slider).find('img'));
     setInterval(() => {
         jQuery(slides[0]).removeClass('foreground');
         slides.push(slides.shift());
         jQuery(slides[0]).addClass('foreground');
     },2000)
 })


/**
 * Light-Slider
 */

import 'lightslider/dist/js/lightslider';
import 'lightslider/dist/css/lightslider.css'


Array.from(jQuery('.lightSlider')).forEach(s => {
    let items = jQuery(s).data('items');
    let responsiveBreakpoints = jQuery(s).data('breakpoints');

    jQuery(s).lightSlider({
    
        pager:false,
        auto:true,
        item:items,
        loop: true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : responsiveBreakpoints.map(rb => {
            return {
                breakpoint:rb.value,
                settings: {
                    item:rb.itemsNumber,
                    slideMove:1,
                }
            }
        })

    });  
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

 


