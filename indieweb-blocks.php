<?php
/**
 * Plugin Name:     Indieweb Blocks
 * Description:     Adds various blocks for use to participate in the IndieWeb
 * Version:         1.0.0
 * Author:          tw2113
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     indieweb-blocks
 * @package         tw2113\indieweb-blocks
 */

namespace tw2113\indiewebblocks;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Register the block with WordPress.
 *
 * @author tw2113
 * @since 0.0.1
 */
function register_blocks() {

	$editor_script   = 'build/index.js';
	$editor_style    = 'build/editor.css';
	$frontend_style  = 'build/style.css';
	$frontend_script = 'build/frontend.js';

	if ( ! file_exists( plugin_dir_path( __FILE__ ) . $editor_script ) ) {
		wp_die( esc_html__( 'Whoops! You need to run `npm run build` for Indieweb Blocks first.', 'indieweb-blocks' ) );
	}

	$asset_file = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'indieweb-blocks-editor-script',
		plugins_url( $editor_script, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_register_style(
		'indieweb-blocks-editor-style',
		plugins_url( $editor_style, __FILE__ ),
		[ 'wp-edit-blocks' ],
		plugin_dir_path( __FILE__ ) . $editor_style
	);

	wp_register_style(
		'indieweb-blocks-style',
		plugins_url( $frontend_style, __FILE__ ),
		[],
		plugin_dir_path( __FILE__ ) . $frontend_style
	);


	wp_enqueue_script(
		'indiewebxyz-block-frontend-script',
		plugins_url( $frontend_script, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	register_block_type( 'tw2113/indiewebxyz-block', array(
		'editor_script' => 'indieweb-blocks-editor-script',
		'editor_style'  => 'indieweb-blocks-editor-style',
		'style'         => 'indieweb-blocks-style',
	) );

	register_block_type( 'tw2113/webmention-block', array(
		'editor_script' => 'indieweb-blocks-editor-script',
		'editor_style'  => 'indieweb-blocks-editor-style',
		'style'         => 'indieweb-blocks-style',
	) );
}
add_action( 'init', __NAMESPACE__ . '\register_blocks' );
