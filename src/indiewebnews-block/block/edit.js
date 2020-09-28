import { TextControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
	const {
		attributes: {
			linktext,
			language,
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
				label={__('IndieNews link text', 'indieweb-blocks')}
				value={linktext || ''}
				onChange={(value) => saveSetting('linktext', value)}
			/>

			<SelectControl
				label={__('IndieNews language to post to: ', 'indieweb-blocks')}
				labelPosition="top"
				value={language}
				options={[
					{label: "English", value: "en"},
					{label: "Svenska", value: "sv"},
					{label: "Deutsch", value: "de"},
					{label: "Français", value: "fr"},
					{label: "Nederlands", value: "nl"},
					{label: "русский", value: "ru"},
				]}
				onChange={(value) => saveSetting('language', value)}
			/>
		</div>
	);
};

export default Edit;
