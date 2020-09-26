import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'tw2113/indiewebxyz-block', {
	title: __( 'Indieweb.xyz Block', 'indieweb-blocks' ),
	icon: 'admin-links',
	category: 'common',
	keywords: [
		__( 'indieweb', 'indieweb-blocks' ),
	],
	attributes: {
		xyzcategory: {
			type: 'string',
		}
	},
	edit,
	save,
} );
