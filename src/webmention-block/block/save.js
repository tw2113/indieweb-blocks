import { filterURLForDisplay } from '@wordpress/url';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( props ) => {
	const {
		attributes: {
			urlAddress
		},
		className
	} = props;

	const displayUrl = urlAddress ? filterURLForDisplay( urlAddress ) : '';
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			{ urlAddress && (
				<p>{ __( 'This is in reply to', 'indieweb-blocks' ) } <a href={urlAddress}
				target="_blank"
				rel="noreferrer noopener in-reply-to"
				className="u-in-reply-to"
				>
				{ displayUrl }
				</a></p>
			) }
		</div>
	);
};

export default Save;
