<?php
$menu_class = \SmAW_THEME\Inc\Menus::get_instance();
$header_menu_id = $menu_class->get_menu_id('smaw-navbar-menu');
$header_menus = wp_get_nav_menu_items($header_menu_id);
?>




<header class="top-banner d-flex align-center container px-3">
    <div class="top-banner__logo">
        <?=function_exists('the_custom_logo')? the_custom_logo() : '';?>
    </div> 

    <div class="top-banner__info d-hide">
        <ul>
            <li class=""><p>Spalto Marengo, 96 - Alessandria 15121</p></li>
            <li class=""><p>+39 345 6789123 | 0131 456372</p></li>
            <li class=""><p>luca@zlimpianti.it</p></li>
        </ul>
    </div>
</header>


<div class="sidebar-filter"></div>


<!-- NAVBAR SECTION -->
<nav class="navbar container-fluid py-1">

    <div class="container d-flex flex-between align-center px-3">

        <a href="<?= get_theme_mod('smaw-navbar-button-link');?>" class="d-block"><?= get_theme_mod('smaw-navbar-button-text');?></a>

        <?php if(!empty($header_menus) && is_array($header_menus)):?>
            <ul class="top-menu d-hide">

                <?php foreach ($header_menus as $menu_item):?>
                    <?php if(!$menu_item->menu_item_parent): ?>
                        <?php $child_menu_items = $menu_class->get_child_menu_items($header_menus, $menu_item->ID);?>

                        <div class='top-menu__item ml-1'>

                            <a href="<?=$menu_item->url?>"><?=$menu_item->title?></a>

                            <?php if(!empty($child_menu_items) && is_array($child_menu_items)):?>
                            <div class="top-menu__item__dropdown">
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

        <div class="menu-open d-hide"><i class="fas fa-bars "></i></div>
        <!-- <div class="menu-close d-hide"><i class="fas fa-times "></i></div> -->

    </div>
    <!-- SIDEBAR SECTION -->
    <div class="sidebar">
        <div class="sidebar__content px-3">
        
        </div>  
    </div>
</nav>
