const Save = ( props ) => {
	const {
		attributes: {
			xyzcategory
		},
		className
	} = props;

	const sub = xyzcategory;
	const url = `https://indieweb.xyz/en/${sub}`;
	return (
		<div className={className}>
			{sub && (
				<p><em>This was also posted to <a href={url} className="u-syndication">{url}</a></em></p>
			)}
		</div>
	);
};

export default Save;
