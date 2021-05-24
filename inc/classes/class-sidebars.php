<?php
/**
 * Regiter sidebars
 * 
 * @package SmAW
 */

namespace SmAW_Theme\Inc;

use SmAW_Theme\Inc\Traits\Singleton;

class Sidebars {
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
        add_action('widgets_init', [$this, 'register_sidebars']);
    }





    /**
     * Register sidebars
     */
    public function register_sidebars(){
        register_sidebar(
			[
				'name'          => esc_html__( 'Right Sidebar Area', 'smaw' ),
				'id'            => 'sidebar-1',
				'description'   => '',
				'before_widget' => '<div id="%1$s" class="widget widget-sidebar m-2 %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h6 class="widget-title text-bold ">',
				'after_title'   => '</h6>',
			]
		);

    }
 




}