<?php
    get_header();

    get_template_part('template/content-navbar');
?>

    <div class="mt-5">
        <?=get_template_part('template/content-loop');?>
    </div>
    

<?php
    get_footer();
?>