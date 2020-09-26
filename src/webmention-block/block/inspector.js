const {__} = wp.i18n;
const {InspectorControls} = wp.blockEditor;
const {PanelBody, ToggleControl } = wp.components;

const Inspector = ({attributes, setAttributes}) => {
	const { doThing } = attributes;
	const saveSetting = (name, value) => {
		setAttributes({
			[name]: value,
		});
	};

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __('Settings') }>
				<ToggleControl
					name="doThing"
					label={ __('Things') }
					checked={!!doThing}
					onChange={(value) => saveSetting('doThing', value)} />
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
