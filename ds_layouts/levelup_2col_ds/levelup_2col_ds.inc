<?php
/**
 * @file
 * Display Suite Layout Configration
 */
function ds_levelup_2col_ds() {
  return array(
    'label' => t('Level up 2 col'),
    'regions' => array(
      // The key of this region name is also the variable used in
      // the template to print the content of that region.
      'left' => t('Left'),
      'right' => t('Right'),
    ),
  );
}
