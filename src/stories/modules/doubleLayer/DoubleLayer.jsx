import clsx from 'clsx';
import PropTypes from 'prop-types';
import validClassNameHandler from 'stories/types/validClassNameHandler';

export const DoubleLayerMode = {
	left: 'border-2 border-black shadow-[-4px_4px_0px_white,-4px_4px_0px_1.5px_#000400]',
	right:
		'border-2 border-black shadow-[4px_4px_0px_white,4px_4px_0px_1.5px_#000400]',
};

export const DoubleLayerPosition = {
	adjacent:
		'invisible absolute top-[2.7rem] right-0 z-10 peer-checked:visible md:right-auto md:left-0',
};

export const DoubleLayerTheme = {
	white: 'bg-white',
};

export const DoubleLayerSize = {
	xl: 'text-xl font-bold leading-6',
};

export const DoubleLayerFontFamily = {
	azeret: 'font-azeret',
};

Object.freeze(DoubleLayerMode);
Object.freeze(DoubleLayerPosition);
Object.freeze(DoubleLayerTheme);
Object.freeze(DoubleLayerSize);
Object.freeze(DoubleLayerFontFamily);

const DoubleLayer = ({
	tag,
	mode,
	position,
	theme,
	size,
	fontFamily,
	className,
	...props
}) => {
	const DynamicTagName = tag;
	return (
		<DynamicTagName
			className={clsx(
				'text-center',
				mode,
				position,
				theme,
				size,
				fontFamily,
				className,
			)}
			{...props}
		/>
	);
};

DoubleLayer.defaultProps = {
	tag: 'div',
};

DoubleLayer.propTypes = {
	tag: PropTypes.string,
	mode: PropTypes.oneOf(Object.values(DoubleLayerMode)),
	position: PropTypes.oneOf(Object.values(DoubleLayerPosition)),
	theme: PropTypes.oneOf(Object.values(DoubleLayerTheme)),
	size: PropTypes.oneOf(Object.values(DoubleLayerTheme)),
	fontFamily: PropTypes.oneOf(Object.values(DoubleLayerFontFamily)),
	className: validClassNameHandler(/w|p|m/, 'only w-* , p-*, m-*'),
};

export default DoubleLayer;
