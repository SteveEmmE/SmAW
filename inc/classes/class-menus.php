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
            'smaw-footer-menu-1' => esc_html__('Footer Menu 1', 'smaw'),
            'smaw-footer-menu-2' => esc_html__('Footer Menu 2', 'smaw')
        ]);
    }



    

    public function get_menu_id($location){
        //Get all locations available
        $locations = \get_nav_menu_locations();
        
        //Get object id by location
        $menu_id = $locations[$location];

        return !empty($menu_id) ? $menu_id : '';
    }





    public function get_child_menu_items($menu_array, $parent_id){
        $child_menus = [];

        if(!empty($menu_array) && \is_array($menu_array)){
            foreach ($menu_array as $menu) {
                if(intval($menu->menu_item_parent) === $parent_id){
                    array_push($child_menus, $menu);
                }
            }
        }

        return $child_menus;
    }







}