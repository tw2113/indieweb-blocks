import {filterURLForDisplay} from '@wordpress/url';
import {__} from '@wordpress/i18n';

const Save = ( props ) => {
	const {
		attributes: {
			urlAddress
		},
		className
	} = props;

	const displayUrl = filterURLForDisplay(urlAddress);

	return (
		<div className={className}>
			{urlAddress && (
				<p>This is in reply to <a href={urlAddress}
				target="_blank"
				rel="noreferrer noopener"
				className="in-reply-to"
				>
				{urlAddress}
				</a></p>
			)}
		</div>
	);
};

export default Save;