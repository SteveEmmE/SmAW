<?php
/**
 * Register Meta Boxes
 * 
 * @package SmAW
 */

namespace SmAW_Theme\Inc;

use SmAW_Theme\Inc\Traits\Singleton;

class Meta_Boxes{
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
        add_action('add_meta_boxes', [$this, 'add_custom_meta_box']);
        add_action('save_post', [$this, 'save_post_meta_data']);
    }





    /**
     * Add custom metaboxes
     */
    public function add_custom_meta_box(){
        
        $screens = ['post', 'page'];
        foreach ($screens as $screen){
            add_meta_box(
                'hide-page-title',
                __('Hide page title', 'smaw'),
                [$this, 'custom_meta_box_html'],
                $screen,
            );
        }
    }




    public function custom_meta_box_html($post){
        $value = get_post_meta($post->ID, '_hide_page_title', true);
        ?>
        <label for="smaw-field"><?php esc_html_e('Hide the page title', 'smaw');?></label>
        <select name="smaw-field" id="smaw-field" class="postbox">
            <option value=""><?php esc_html_e( 'Select', 'smaw' ); ?></option>
			<option value="yes" <?php selected( $value, 'yes' ); ?>>
				<?php esc_html_e( 'Yes', 'smaw' ); ?>
			</option>
			<option value="no" <?php selected( $value, 'no' ); ?>>
				<?php esc_html_e( 'No', 'smaw' ); ?>
			</option>
        </select>
        <?php
    }


    public function save_post_meta_data($post_id){
        if ( array_key_exists( 'smaw-field', $_POST ) ) {
            update_post_meta(
                $post_id,
                '_hide_page_title',
                $_POST['smaw-field']
            );
        }
    }
  

}