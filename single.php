<?php

$args = array("hide_empty" => 0);
    $categories = get_categories($args);
    get_header();

    get_template_part('template/content-navbar');
?>

    <div class="mt-4 categories-slider-fixed-trigger">
        
        <div class='container'>
            <div class="py-3 banner__breadcrumb"><?php echo do_shortcode("[breadcrumb]"); ?></div>
        </div>

    </div>



    <div class="has-timberwolf-background-color p-relative pt-4">
        <div class="category-slider container-fluid py-1 has-light-gray-background-color p-absolute">
            <div class='container'>
                <div class=" overflow-scroll-x hide-scrollbar">
                    <ul class="">
                        <?php foreach($categories as $category){ ?>
                            <li class='mr-2'>
                                <a class="has-charleston-green-color text-uppercase text-bold" href='<?= get_category_link($category->term_id)?>'><?= $category->name ?></a>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        </div>

        <div id="page-content" class="d-flex container col-md-responsive"> 
            <div class="archive flex-basis-70 ">
                <div class="my-3 p-3 has-white-background-color page-shadow">
                    <h1 class="text-heavy "> <?= the_title() ?> </h1>
                    <a href="<?= get_category_link(get_the_category()[0]->term_id)?>" class="d-block my-1"> <i class="fas fa-tags has-charleston-green-color pr-1"></i><?= get_the_category()[0]->name; ?></a>
                    <?=get_template_part('template/content-loop');?>
                    <p class="d-inline-block mt-2 text-bold"><?php echo get_the_date(  ); ?></p>
                </div>
            </div>
            <div class="sidebar flex-basis-30 ">
                <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar("Right Sidebar Area") ) : ?>
                <?php endif;?>
            </div>
        </div>
    </div>
    

<?php
    get_footer();
?>