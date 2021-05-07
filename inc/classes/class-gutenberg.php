<?php
/**
 * Enqueue theme assets
 * 
 * @package portedipetra
 * 
 */

namespace SmAW_THEME\Inc;

use SmAW_THEME\Inc\Traits\Singleton;


class Gutenberg{
    use Singleton;

    protected function __construct(){
        //load class
        
        $this->set_hooks();
    }

    protected function set_hooks(){
        //action and filters
        add_action('init', [$this, 'gutenberg_default_colors']);
        add_action('after_setup_theme', [$this, 'gutenberg_editor_font_sizes']);
        add_filter( 'block_categories', [$this, 'blocks_category'], 10, 2);
        add_action('init', [$this, 'gutenberg_blocks']);
        add_action( 'enqueue_block_editor_assets', [$this, 'load_editor_css'] );
    }

    function pdp_gutenberg_default_colors(){
        add_theme_support(
            'editor-color-palette', 
            array(
                array(
                    'name' => 'Allports',
                    'slug' => 'allports',
                    'color' => '#007194'
                ),
                array(
                    'name' => 'Tango',
                    'slug' => 'tango',
                    'color' => '#ed691f'
                ),
                array(
                    'name' => 'Parsian Green',
                    'slug' => 'persian green',
                    'color' => '#00a294'
                ),
                array(
                    'name' => 'Grey',
                    'slug' => 'grey',
                    'color' => '#878787'
                ),
                array(
                    'name' => 'White',
                    'slug' => 'white',
                    'color' => '#ffffff'
                )
            )
        );

        add_theme_support('disable-custom-font-sizes');
    }

    function pdp_gutenberg_editor_font_sizes(){
        add_theme_support('editor-font-sizes', array(
            array(
                'name' => __('Small', 'pdp'),
                'size' => 8,
                'slug' => 'small'
            ),
            array(
                'name' => __('Medium', 'pdp'),
                'size' => 12,
                'slug' => 'medium'
            ),
            array(
                'name' => __('Large', 'pdp'),
                'size' => 24,
                'slug' => 'large'
            ),
            array(
                'name' => __('Bonkers', 'pdp'),
                'size' => 40,
                'slug' => 'bonkers'
            )
        ));

    }


    function pdp_blocks_category( $categories, $post ) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'pdp-blocks',
                    'title' => __( 'Ppd Blocks', 'pdp' ),
                ),
            )
        );
    }
    
    function pdp_gutenberg_blocks(){

        wp_register_script('custom-blocks', PDP_DIR_URI.'/build/index.js', array('wp-blocks', 'wp-editor', 'wp-components'));
        wp_register_style('reset', PDP_DIR_URI.'/css/reset.min.css', [], filemtime(PDP_DIR_PATH.'/css/reset.min.css'), 'all');
        
        wp_register_style('lightslider', PDP_DIR_URI.'/css/lightslider.css', array('reset'));

        wp_register_style('fontawesome', PDP_DIR_URI.'/fonts/fontawesome/css/all.css', [], filemtime(PDP_DIR_PATH.'/fonts/fontawesome/css/all.css'), 'all');

        wp_register_style('style', PDP_DIR_URI.'/css/main.min.css', array('reset', 'fontawesome'),);

        wp_enqueue_script('jquery', $in_footer = true);

        wp_register_script('lightslider', PDP_DIR_URI.'/js/lightslider.js', ['jquery'], filemtime(PDP_DIR_PATH.'/js/lightslider.js'), true);
        wp_enqueue_script('lightslider', $in_footer = true);

        wp_register_script('main', PDP_DIR_URI.'/js/main.js', ['jquery', 'lightslider'], filemtime(PDP_DIR_PATH.'/js/main.js'), true);
        wp_enqueue_script('main', $in_footer = true);
    
        register_block_type(
            'pdp/custom-slider', 
            array(
                'editor_script' => 'main',
                'editor_style' => 'lightslider',
                'style' => 'lightslider'
            )
        );

    }

    function pdp_load_editor_css(){


        wp_register_style('fontawesome', PDP_DIR_URI.'/fonts/fontawesome/css/all.css', [], filemtime(PDP_DIR_PATH.'/fonts/fontawesome/css/all.css'), 'all');
        $css_dependencies = array('fontawesome');
    
        // Enqueue the editor styles.
        wp_enqueue_style( 'style-editor', get_theme_file_uri( '/css/editor.min.css' ), $css_dependencies, wp_get_theme()->get( 'Version' ), 'all' );
    
    }
    
    
    
    



}