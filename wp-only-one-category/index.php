<?php
/*
Plugin Name: WP Only One Category
Plugin URI: https://github.com/dsktschy/wp-only-one-category
Description: WP Only One Category disable to select multiple categories.
Version: 1.0.0
Author: dsktschy
Author URI: https://github.com/dsktschy
License: GPL2
*/

// Load the JS file to disable to select multiple categories
add_action('admin_enqueue_scripts', function() {
  wp_enqueue_script(
    "wpooc-admin-custom",
    plugins_url('', __FILE__) . '/app.js',
    [],
    false,
    true
  );
});
