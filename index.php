<?php
/**
 * Index template
 * 
 * @package SmAW
 */

get_header();
?>


<main style="width:100%">
    <?php if(have_posts()): 
            while(have_posts()): 
                the_post();?>
            <?php the_content();?>
    <?php endwhile; else: endif;?>
</main>




<?php

get_sidebar();

get_footer();


