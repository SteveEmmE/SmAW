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

        add_action('init', [$this, 'gutenberg_default_colors']);
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

    

    }

    public function gutenberg_theme_supports(){

        //Insert custom styles in gutenberg
        add_theme_support( 'editor-styles' );
        add_editor_style('assets/build/css/editor.css'); //file relative to the theme root

        //Add the gutenberg block styles in the frontend
        add_theme_support('wp-block-styles');

        //Add the possibility to align wide a block in guteneberg
        //add_theme_support('align-wide');

        add_theme_support('disable-custom-font-sizes');

        //add_post_type_support( 'page', 'excerpt' );
        

        
    }

    function gutenberg_default_colors(){
        add_theme_support(
            'editor-color-palette', 
            array(
                array(
                    'name' => 'Cinnabar',
                    'slug' => 'cinnabar',
                    'color' => '#ea3f2d'
                ),
                array(
                    'name' => 'Barn Red',
                    'slug' => 'barn red',
                    'color' => '#770d02'
                ),
                array(
                    'name' => 'Charleston Green',
                    'slug' => 'charleston green',
                    'color' => '#2a2b26'
                ),
                array(
                    'name' => 'Timberwolf',
                    'slug' => 'timberwolf',
                    'color' => '#f2f2f2'
                ),
                array(
                    'name' => 'White',
                    'slug' => 'white',
                    'color' => '#ffffff'
                )
            )
        );

       
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









}