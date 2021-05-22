<?php
    get_header();

    get_template_part('template/content-navbar');
?>

    <div class="mt-4">
        
        <div class='container'>
            <div class="py-3 banner__breadcrumb"><?php echo do_shortcode("[breadcrumb]"); ?></div>
            <div class='mb-3 page-separator'> <hr/></div>
            <h1 class="mb-3 text-heavy text-uppercase"><?= the_title()?></h1>
        </div>

        
        <?=get_template_part('template/content-loop');?>
    </div>
    

<?php
    get_footer();
?>