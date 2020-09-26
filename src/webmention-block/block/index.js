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
	],
	attributes: {
		urlAddress: {
			type: 'string'
		}
	},
	edit,
	save,
} );
