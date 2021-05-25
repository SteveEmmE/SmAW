<?php $index = 0;?>


<div class="archive-container d-flex flex-wrap flex-center">
    <?php if(have_posts()): 
            while(have_posts()): 
                the_post();?> 

                <section class='post-container page-shadow has-white-background-color m-2 p-2'>
                    <div class='post-container__image-container'>
                        <?php if(strlen(get_the_post_thumbnail()) != 0):?>
                            <img class="post-image" src="<?php the_post_thumbnail_url($size='thumbnail'); ?>">
                        <?php else: ?>
                            <div class="img-placeholder has-barn-red-background-color"> </div>
                        <?php endif; ?>
                    </div>
                    <div>
                       
                        <a href="<?= get_category_link(get_the_category()[0]->term_id)?>" class="d-block my-1"> <i class="fas fa-tags has-charleston-green-color pr-1"></i><?= get_the_category()[0]->name; ?></a>
                        <h6 class="has-medium-font-size mb-1 text-bold "><?php the_title(); ?></h6>
                        <p class=""><?php the_excerpt('');?></p>
                        <div class="mt-1 d-flex flex-between align-center">
                            <p class="d-inline-block"><span class="text-smaller-s text-bold"><?php echo get_the_date( ); ?></span></p>
                            <a class="d-inline-block" href="<?php the_permalink();?>"><i class="fas fa-arrow-right fa-fw"></i></a>
                        </div>
                    </div>
                </section>

            
            
    <?php endwhile; else: endif;?>
</div>
