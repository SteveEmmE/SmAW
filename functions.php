<?php

/**
 * Theme Functions.
 * 
 * @package SmAW
 */


if(!defined("SMAW_DIR_PATH")){ define("SMAW_DIR_PATH", untrailingslashit(get_template_directory())); }
if(!defined("SMAW_DIR_URI")){ define("SMAW_DIR_URI", untrailingslashit(get_template_directory_uri())); }

if(!defined("SMAW_BUILD_URI")){ define("SMAW_BUILD_URI", untrailingslashit(get_template_directory_uri()).'/assets/build'); }
if(!defined("SMAW_BUILD_PATH")){ define("SMAW_BUILD_PATH", untrailingslashit(get_template_directory()).'/assets/build'); }

if(!defined("SMAW_BUILD_JS_URI")){ define("SMAW_BUILD_JS_URI", untrailingslashit(get_template_directory_uri()).'/assets/build/js'); }
if(!defined("SMAW_BUILD_JS_PATH")){ define("SMAW_BUILD_JS_PATH", untrailingslashit(get_template_directory()).'/assets/build/js'); }

if(!defined("SMAW_BUILD_IMG_URI")){ define("SMAW_BUILD_IMG_URI", untrailingslashit(get_template_directory_uri()).'/assets/build/src/img'); }

if(!defined("SMAW_BUILD_CSS_URI")){ define("SMAW_BUILD_CSS_URI", untrailingslashit(get_template_directory_uri()).'/assets/build/css'); }
if(!defined("SMAW_BUILD_CSS_PATH")){ define("SMAW_BUILD_CSS_PATH", untrailingslashit(get_template_directory()).'/assets/build/css'); }



require_once SMAW_DIR_PATH . '/inc/helpers/autoloader.php';

function smaw_get_theme_instance(){ \SmAW_Theme\Inc\SMAW_THEME::get_instance(); }
smaw_get_theme_instance();



function smaw_enqueue_scripts(){
    wp_enqueue_style('stylesheet', get_stylesheet_uri(), [], filemtime(get_template_directory().'/style.css'), 'all');
}


add_action('wp_enqueue_scripts', 'smaw_enqueue_scripts');


