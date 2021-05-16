<?php
    get_header();

    get_template_part('template/content-navbar');
?>

    <div class="mt-3">
        <?=get_template_part('template/content-loop');?>
    </div>
    

<?php
    get_footer();
?>