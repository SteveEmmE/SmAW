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

        $this->setup_hooks();
    }





    /**
     * Add actions for all styles and scripts
     */
    protected function setup_hooks(){
        add_action('after_setup_theme', [$this, 'setup_theme_functionalities']);
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
        add_theme_support('post-thumbnail');

        //Improve the user experience og the customizer
        add_theme_support('customize-selective-refresh-widgets');

        //Insert custom styles in gutenberg
        add_editor_style();

        //Add the gutenberg block styles in the frontend
        add_theme_support('wp-block-styles');

        //Add the possibility to align wide a block in guteneberg
        add_theme_support('align-wide');


    }




}