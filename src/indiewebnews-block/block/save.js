const Save = ( props ) => {
	const {
		attributes: {
			linktext,
			language,
		},
		className
	} = props;

	const url = `https://news.indieweb.org/${language}`;

	return (
		<div className={className}>
			{linktext && (
				<p><a href={url} className="u-syndication">This was also posted to {linktext}</a></p>
			)}
		</div>
	);
};

export default Save;
