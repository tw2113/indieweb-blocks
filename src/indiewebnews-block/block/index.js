import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'tw2113/indiewebnews-block', {
	title: __( 'IndieNews Block', 'indieweb-blocks' ),
	icon: 'share-alt2',
	category: 'common',
	keywords: [
		__( 'indieweb', 'indieweb-blocks' ),
	],
	attributes: {
		linktext: {
			type: 'string',
		},
		language: {
			type: 'string',
		}
	},
	example: {
		attributes: {
			linktext: __( 'Shared on #IndieNews', 'indieweb-blocks' ),
			language: 'en',
		},
	},
	edit,
	save,
} );
