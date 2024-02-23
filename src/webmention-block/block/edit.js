import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
	const {
		attributes: {
			urlAddress,
		},
		className,
		setAttributes,
	} = props;
	const saveSetting =  (name, value ) => {
		setAttributes({
			[name]: value,
		});
	};

	const blockProps = useBlockProps( {
		className,
	} );

	return (
		<div { ...blockProps }>
			<TextControl
				label={ __( 'URL to send Webmention to', 'indieweb-blocks' ) }
				value={ urlAddress || '' }
				onChange={ ( value ) => saveSetting( 'urlAddress', value ) }
			/>
		</div>
	);
};

export default Edit;
