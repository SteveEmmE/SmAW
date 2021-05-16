<?php
/**
 * Footer template
 * 
 * @package SmAW
 */
?>

<?php
    $menu_class = \SmAW_THEME\Inc\Menus::get_instance();

    $footer_menu_id_1 = $menu_class->get_menu_id('smaw-footer-menu-1');
    $footer_menus_1 = wp_get_nav_menu_items($footer_menu_id_1);

    $footer_menu_id_2 = $menu_class->get_menu_id('smaw-footer-menu-2');
    $footer_menus_2 = wp_get_nav_menu_items($footer_menu_id_2);
?>

   
   <!-- FOOTER SECTION -->
   <footer class="container-fluid" >

        <div class="container d-flex flex-around align-center py-4">

            <div class="footer__item">
                <?php if(!empty($footer_menus_1) && is_array($footer_menus_1)):?>
                    <ul class="">

                        <?php foreach ($footer_menus_1 as $menu_item):?>
                            <?php if(!$menu_item->menu_item_parent): ?>
                                <li><a class='' href="<?=$menu_item->url?>"><?=$menu_item->title?></a></li>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>
            <div class="footer__item">
                <div class="logo">
                    <?=function_exists('the_custom_logo')? the_custom_logo() : '';?>
                </div>
                
            </div>

            <div class="footer__item">
                <?php if(!empty($footer_menus_2) && is_array($footer_menus_2)):?>
                    <ul class="">

                        <?php foreach ($footer_menus_2 as $menu_item):?>
                            <?php if(!$menu_item->menu_item_parent): ?>
                                <li><a class='' href="<?=$menu_item->url?>"><?=$menu_item->title?></a></li>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>

        </div>

        <div class="credits py-3">
            <p class="text-center text-smaller-s"> &copy; Copyright 2021 | All right reserver | Credit by Stefano Monti</p>
        </div>
       

    </footer>

    <?php wp_footer();?>   
</body>
</html>