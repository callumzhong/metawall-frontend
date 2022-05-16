import clsx from 'clsx';
import PropTypes from 'prop-types';
const classes = {
	'mode--left':
		'border-2 border-black shadow-[-4px_4px_0px_white,-4px_4px_0px_1.5px_#000400]',
	'mode--right':
		'border-2 border-black shadow-[4px_4px_0px_white,4px_4px_0px_1.5px_#000400]',
};

const DoubleLayer = ({ tag, mode, className, children, ...props }) => {
	const DynamicTagName = tag;
	return (
		<DynamicTagName
			className={clsx(classes[`mode--${mode}`], className)}
			{...props}
		>
			{children}
		</DynamicTagName>
	);
};

DoubleLayer.defaultProps = {
	tag: 'div',
};

DoubleLayer.propTypes = {
	tag: PropTypes.string,
	mode: PropTypes.oneOf(['left', 'right']),
};

export default DoubleLayer;
