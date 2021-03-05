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
				'name'          => esc_html__( 'Sidebar', 'smaw' ),
				'id'            => 'sidebar-1',
				'description'   => '',
				'before_widget' => '<div id="%1$s" class="widget widget-sidebar %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			]
		);

		register_sidebar(
			[
				'name'          => esc_html__( 'Footer', 'smaw' ),
				'id'            => 'sidebar-2',
				'description'   => '',
				'before_widget' => '<div id="%1$s" class="widget widget-footer cell column %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h4 class="widget-title">',
				'after_title'   => '</h4>',
			]
		);
    }
 




}