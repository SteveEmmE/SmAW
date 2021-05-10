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
       /*  add_action('init', [$this, 'gutenberg_default_colors']);
        add_action('after_setup_theme', [$this, 'gutenberg_editor_font_sizes']);
        add_action('init', [$this, 'gutenberg_blocks']);
        add_action( 'enqueue_block_editor_assets', [$this, 'load_editor_css'] ); */

        add_action('wp_enqueue_scripts', [$this, 'remove_default_gutenberg_styles']);
        add_action('after_setup_theme', [$this, 'gutenberg_theme_supports']);
        add_action('enqueue_block_assets', [$this, 'enqueue_editor_assets']);
        add_filter( 'block_categories', [$this, 'add_blocks_categories']);

    }





    public function remove_default_gutenberg_styles(){
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-block-style');
    }


    public function enqueue_editor_assets(){
        $assets_config_file = sprintf('%s/assets.php', SMAW_BUILD_PATH);


        if(! file_exists($assets_config_file)) return;

        $assets_config = require_once $assets_config_file;

        if(empty($assets_config['js/editor.js'])) return;

        $editor_asset = $assets_config['js/editor.js'];

        $js_dependencies = (!empty($editor_asset['dependencies'])) ? $editor_asset['dependencies'] : [];
        $js_version = (!empty($editor_asset['version'])) ? $editor_asset['version'] : filemtime($assets_config_file);

        // Theme Gutenberg block JS
        if(is_admin())
            wp_enqueue_script( 'smaw-block-js', SMAW_BUILD_JS_URI . '/blocks.js', $js_dependencies, $js_version, true );

        $css_dependencies = [
            'wp-block-library-theme',
            'wp-block-library'
        ];

        wp_enqueue_style('smaw-block-css', SMAW_BUILD_CSS_URI . '/blocks.css', [], filemtime(SMAW_BUILD_CSS_PATH . '/blocks.css'), 'all');

    }

    public function gutenberg_theme_supports(){

        //Insert custom styles in gutenberg
        add_theme_support( 'editor-styles' );
        add_editor_style('assets/build/css/editor.css'); //file relative to the theme root

        //Add the gutenberg block styles in the frontend
        add_theme_support('wp-block-styles');

        //Add the possibility to align wide a block in guteneberg
        add_theme_support('align-wide');

        
    }

    



 



    function add_blocks_categories( $categories ) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'smaw-blocks',
                    'title' => __( 'SmAW Blocks', 'smaw' ),
                ),
            )
        );
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