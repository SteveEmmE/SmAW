<?php
/**
 * Boostraps the Theme.
 * 
 * @package SmAW
 */

namespace SmAW_Theme\Inc;

use SmAW_Theme\Inc\Traits\Singleton;

class SMAW_THEME {
    use Singleton;


    /**
     * Load all theme classes 
     */
    protected function __construct(){

        Assets::get_instance();
        Menus::get_instance();
        Meta_Boxes::get_instance();
        Sidebars::get_instance();
        Gutenberg::get_instance();
        Customizer::get_instance();

        $this->setup_hooks();
    }





    /**
     * Add actions for all styles and scripts
     */
    protected function setup_hooks(){
        add_action('after_setup_theme', [$this, 'setup_theme_functionalities']);
        add_action('after_setup_theme', [$this, 'image_sizing']);
        add_filter( 'excerpt_length', [$this, 'wpdocs_custom_excerpt_length'], 999 );
        
    }


    function wpdocs_custom_excerpt_length( $length ) {
        return 20;
    }
    
    





    /**
     * Add theme functionalities
     */
    public function setup_theme_functionalities(){

        //Manage the title tag of the entire website dinamically 
        add_theme_support('title-tag');

        //Permits to manage the logo via customizer
        add_theme_support('custom-logo',[
            'width' => 100,
            'height' => 100,
            'flex-width' => true,
            'flex-height' => true
        ]);
        
        //Permits to manage the image background via customizer
        add_theme_support('custom-background', [
            'default-color' => '#ffffff' // It is possible to add also a default-image
        ]);

        //Permits to manage the post-thumbnails inside the gutenberg editor
        add_theme_support('post-thumbnails');

        //Improve the user experience og the customizer
        add_theme_support('customize-selective-refresh-widgets');

        

        add_theme_support(
			'html5',
			[
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			]
		);


        //Remove the core block patterns
        remove_theme_support('core-block-patterns');

        add_theme_support('widgets');
       


    }

    //excerp length
    public function custom_excerpt_length( $length ){
        return 1;
    }
        
    




    /**
     * Add different image sizes
     */
    public function image_sizing(){
        add_image_size('gallery', 353, 233, true);
    }






}