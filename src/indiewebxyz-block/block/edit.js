import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Subs from '../data/subs';

const Edit = ( props ) => {
	const {
		attributes: {
			xyzcategory,
		},
		className,
		setAttributes,
	} = props;
	const sublist = Subs();
	sublist.en.push();
	const subs = sublist.en.map((item, i) => {
		return {
			'label': item.sub,
			'value': item.sub
		};
	});
	subs.unshift({'label': '--None--', 'value': '0'});

	return (
		<div className={className}>
			<SelectControl
				label={__('Indieweb.xyz Sub to post to: ', 'indieweb-blocks')}
				labelPosition="top"
				value={xyzcategory}
				options={subs}
				onChange={xyzcategory => setAttributes({xyzcategory})}
			/>
		</div>
	);
};

export default Edit;
