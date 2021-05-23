<?php $index = 0;?>


<div class="archive-container d-flex flex-wrap flex-center">
    <?php if(have_posts()): 
            while(have_posts()): 
                the_post();?> 

                <section class='post-container'>
                    <div>
                        <?php if(strlen(get_the_post_thumbnail()) != 0):?>
                            <img class="post-image" src="<?php the_post_thumbnail_url($size='galleryThumbnail'); ?>">
                        <?php else: ?>
                            <img data-cat="<?= get_the_category()[0]->name; ?>" class="img-placeholder"/>
                        <?php endif; ?>
                    </div>
                    <div>
                        <a ><?= get_the_category()[0]->name; ?></a>
                        <h6 class="has-medium-font-size mb-2 text-bold "><?php the_title(); ?></h6>
                        <p><?php the_excerpt();?></p>
                        <a href="<?php the_permalink();?>">Leggi tutto...</a>
                    </div>
                </section>

            
            
    <?php endwhile; else: endif;?>
</div>
