import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { formatBold, formatItalic, link } from '@wordpress/icons';

const Edit = ( props ) => {
	const {
		attributes: {
			urlAddress,
		},
		className,
		setAttributes,
	} = props;
	const saveSetting = (name, value) => {
		setAttributes({
			[name]: value,
		});
	};

	return (
		<div className={className}>
			<TextControl
				label={__('URL to send Webmention to', 'indieweb-blocks')}
				value={urlAddress || ''}
				onChange={(value) => saveSetting('urlAddress', value)}
			/>
		</div>
	);
};

export default Edit;
