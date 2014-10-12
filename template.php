<?php

/**
 * @file template.php
 */

/**
 * Implements hook_preprocess_page().
 */
function levelup_preprocess_page(&$variables) {
  //Add Google Fonts from CDN.
  drupal_add_css('//fonts.googleapis.com/css?family=Rokkitt:400,700', 'external');

  //Add Addthis widget.
  //drupal_add_js('//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5293ccf0306d3536', 'external');
  //drupal_add_js("addthis.layers({'theme' : 'dark','share' : {'position' : 'right','numPreferredServices' : 4}});", "inline");
}

/**
 * Implements hook_preprocess_book_navigation().
 */
function levelup_preprocess_book_navigation(&$variables) {
  $variables['next_title'] = substr($variables['next_title'], 0, 30);
  $variables['prev_title'] = substr($variables['prev_title'], 0, 30);
}
