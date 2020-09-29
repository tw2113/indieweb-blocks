import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'tw2113/webmention-block', {
	title: __( 'Webmention Block', 'indieweb-blocks' ),
	icon: 'admin-links',
	category: 'common',
	keywords: [
		__( 'indieweb', 'indieweb-blocks' ),
		__( 'webmention', 'indieweb-blocks' ),
		__( 'web', 'indieweb-blocks' )
	],
	attributes: {
		urlAddress: {
			type: 'string'
		}
	},
	example: {
		attributes: {
			urlAddress: 'https://michaelbox.net',
		},
	},
	edit,
	save,
} );
