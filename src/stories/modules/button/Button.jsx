import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import validClassNameHandler from 'stories/types/validClassNameHandler';

export const ButtonTheme = {
	primary:
		'bg-dark-blue font-bold text-white hover:bg-golden-dream hover:text-black',
	secondary: 'bg-gray font-bold text-white',
	black: 'bg-black text-white',
};

export const ButtonMode = {
	shadow: 'shadow-[-2px_2px_0px_#000400] border-2 border-black',
	outline: 'border-2 border-[#808080]',
};

export const ButtonSize = {
	sm: 'leading-[2rem] max-w-max',
	md: 'leading-[3.125rem]',
	lg: 'leading-[3.125rem]',
};

export const ButtonFontFamily = {
	azeret: 'font-azeret',
};

export const ButtonBorderRadius = {
	sm: 'rounded',
	md: 'rounded-lg',
};

Object.freeze(ButtonTheme);
Object.freeze(ButtonMode);
Object.freeze(ButtonSize);
Object.freeze(ButtonFontFamily);
Object.freeze(ButtonBorderRadius);

const Button = ({
	tag,
	className,
	mode,
	theme,
	size,
	borderRadius,
	type,
	fontFamily,
	...props
}) => {
	const DynamicTagName = tag === 'link' ? Link : tag;
	return (
		<DynamicTagName
			className={clsx(
				'w-full text-center',
				mode,
				theme,
				size,
				fontFamily,
				borderRadius,
				className,
			)}
			type={type}
			{...props}
		/>
	);
};

Button.defaultProps = {
	tag: 'button',
	size: ButtonSize.lg,
	borderRadius: ButtonBorderRadius.md,
};

Button.propTypes = {
	tag: PropTypes.string,
	theme: PropTypes.oneOf(Object.values(ButtonTheme)),
	mode: PropTypes.oneOf(Object.values(ButtonMode)),
	size: PropTypes.oneOf(Object.values(ButtonSize)),
	fontFamily: PropTypes.oneOf(Object.values(ButtonFontFamily)),
	borderRadius: PropTypes.oneOf(Object.values(ButtonBorderRadius)),
	className: validClassNameHandler(),
	type: PropTypes.oneOf(['submit', 'button']),
};
export default Button;
