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
        <?=get_template_part('template/content-loop');?>
    </div>
    

<?php
    get_footer();
?>