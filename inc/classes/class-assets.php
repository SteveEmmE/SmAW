<?php
/**
 * Enqueue theme assets
 * 
 * @package SmAW
 */

namespace SmAW_Theme\Inc;

use SmAW_Theme\Inc\Traits\Singleton;

class Assets{
    use Singleton;


    /**
     * Load all theme classes 
     */
    protected function __construct(){

        $this->setup_hooks();
    }





    /**
     * Add actions for all styles and scripts
     */
    protected function setup_hooks(){
        add_action('wp_enqueue_scripts', [$this, 'register_styles']);
        add_action('wp_enqueue_scripts', [$this, 'register_scripts']);
    }





    /**
     * Register the global styles
     */
    public function register_styles(){
        wp_enqueue_style('smaw-reset-css', SMAW_BUILD_CSS_URI . '/reset.css', [], filemtime(SMAW_BUILD_CSS_PATH . '/reset.css'), 'all');

    }





    /**
     * Register the global scripts
     */
    public function register_scripts(){}

}