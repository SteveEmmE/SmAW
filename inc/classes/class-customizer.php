<?php
/**
 * Customizer Setup
 * 
 * @package SmAW
 * 
 */

namespace SmAW_THEME\Inc;

use SmAW_THEME\Inc\Traits\Singleton;

class Customizer{
    use Singleton;

    protected function __construct(){
        //load class
        
        $this->set_hooks();
    }

    protected function set_hooks(){
        //action and filters
        add_action('customize_register', [$this, 'navbar_button_setup']);
    }

    function navbar_button_setup($wp_customize){
        $wp_customize->add_section(
            'smaw-navbar-button-section',
            [
                'title' => __('Navbar Button Section', 'smaw')
            ]
        );

        /**
         * TEXT
         */

        $wp_customize->add_setting(
            'smaw-navbar-button-text',
            array(
                'default' => ''
            )
        );
        $wp_customize->add_control(
            new \WP_Customize_Control(
                $wp_customize,
                'smaw-navbar-button-text-control',
                array(
                    'label' => __('Text'),
                    'section' => 'smaw-navbar-button-section',
                    'settings' => 'smaw-navbar-button-text',
                )
            )
        );

        /**
         * LINK
         */

        $wp_customize->add_setting(
            'smaw-navbar-button-link',
            array(
                'default' => ''
            )
        );
        $wp_customize->add_control(
            new \WP_Customize_Control(
                $wp_customize,
                'smaw-navbar-button-link-control',
                array(
                    'label' => __('Link'),
                    'section' => 'smaw-navbar-button-section',
                    'settings' => 'smaw-navbar-button-link',
                )
            )
        );
    }

}

