<?php
$menu_class = \SmAW_THEME\Inc\Menus::get_instance();
$header_menu_id = $menu_class->get_menu_id('smaw-navbar-menu');
$header_menus = wp_get_nav_menu_items($header_menu_id);
?>

<!-- SIDEBAR SECTION -->
<div class="sidebar">
    <div class="sidebar__content">
    
    </div>  
</div>
<div class="sidebar-filter"></div>


<header class="top-banner">
    <div class="top-banner__logo">
        <?=function_exists('the_custom_logo')? the_custom_logo() : '';?>
    </div> 

    <div class="top-banner__info">
        <ul>
            <li>Spalto Marengo, 96 - Alessandria 15121</li>
            <li>+39 345 6789123 | 0131 456372</li>
            <li>luca@zlimpianti.it</li>
        </ul>
    </div>
</header>


<!-- NAVBAR SECTION -->
<nav class="navbar">
        
<a href="<?= get_theme_mod('smaw-navbar-button-link');?>" class="cta-btn ml-1"><?= get_theme_mod('smaw-navbar-button-text');?></a>


    <?php if(!empty($header_menus) && is_array($header_menus)):?>
        <ul class="top__menu">

            <?php foreach ($header_menus as $menu_item):?>
                <?php if(!$menu_item->menu_item_parent): ?>
                    <?php $child_menu_items = $menu_class->get_child_menu_items($header_menus, $menu_item->ID);?>

                    <div class='top__menu__item'>

                        <a href="<?=$menu_item->url?>"><?=$menu_item->title?></a>

                        <?php if(!empty($child_menu_items) && is_array($child_menu_items)):?>
                        <div class="top__menu__item__dropdown">
                            <?php foreach ($child_menu_items as $child_item):?>
                                <a href="<?=$child_item->url?>"><?= $child_item->title?></a>
                            <?php endforeach; ?>
                        </div>
                        <?php endif; ?>

                    </div>


                <?php endif; ?>
            <?php endforeach; ?>


        </ul>
    <?php endif; ?>



    
    <div class="navbar__burger">
        <div class="open"></div>
        <div class="close"></div>   
    </div>

</nav>
