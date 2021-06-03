<?php
/**
 * Form Script
 * 
 * @package SmAW
 * 
 */

namespace SmAW_THEME\Inc;

use SmAW_THEME\Inc\Traits\Singleton;


class Form{
    use Singleton;

    protected function __construct(){
        //load class
        $this->set_hooks();
        
    }

    protected function set_hooks(){
        //action and filters
        add_action('wp_ajax_enquiry',[$this, 'enquiry_form']);
        add_action('wp_ajax_nopriv_enquiry',[$this, 'enquiry_form']);
    }


    function enquiry_form(){


        if( !wp_verify_nonce($_POST['nonce'], 'ajax-nonce')){
            wp_send_json_error('Nonce is incorrect', 401);
            wp_die();
        }
    
        $sitename = strtolower($_SERVER['SERVER_NAME']);
        if (substr($sitename, 0, 4) == 'www.') {
            $sitename = substr($sitename, 4);  
        }
        else{
            wp_send_json_error("problem with server address");
            wp_die();
        }
    
        $formdata = [];
        wp_parse_str($_POST['enquiry'], $formdata);
    
        $admin_email = get_option('admin_email');
    
        $headers[] = 'Content-Type: text/html; charset=UTF-8';
        $headers[] = 'From: wordpress@' . $sitename;
        $headers[] = 'Reply-to:' . $formdata['email'];
    
        $send_to = $admin_email;
    
        $subject = "email sito web da: " . $formdata['name'] . ' ' . $formdata['surname'];
    
        $message = '';
    
        foreach($formdata as $index => $field){
            $message .= '<strong>' . $index . '</strong>: ' . $field . '<br/>';
        }
    
        try{
            if(wp_mail($send_to, $subject, $message, $headers)){
                wp_send_json_success("ok");
            }
            else{
                wp_send_json_error("problem while sending email");
            }
        } catch(\Exception $e){
            wp_send_json_error($e->getMessage());
        }
    }
    









}