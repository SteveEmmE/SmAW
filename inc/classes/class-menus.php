<?php
/**
 * Registering menus
 * 
 * @package SmAW
 */

namespace SmAW_Theme\Inc;

use SmAW_Theme\Inc\Traits\Singleton;

class Menus{
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
        add_action('init', [$this, 'register_menus']);
    }
    




    /**
     * Register all the menus positions
     */

    public function register_menus(){
        register_nav_menus([
            'smaw-navbar-menu' => esc_html__('Navbar Menu', 'smaw'),
            'smaw-footer-menu' => esc_html__('Footer Menu', 'smaw')
        ]);
    }








}