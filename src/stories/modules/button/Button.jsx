import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import validClassNameHandler from 'stories/types/validClassNameHandler';

export const ButtonTheme = {
	primary: 'font-bold bg-dark-blue hover:bg-golden-dream',
	secondary: 'bg-gray font-bold hover:bg-golden-dream',
	black: 'bg-black hover:bg-golden-dream',
};

export const ButtonColor = {
	white: 'text-white hover:text-black',
	black: 'text-black',
};

export const ButtonMode = {
	shadow: 'shadow-[-2px_2px_0px_#000400] border-2 border-black',
	outline: 'border-2 border-[#808080]',
	'outline-black': 'border-2 border-[#000400]',
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
Object.freeze(ButtonColor);

const Button = ({
	tag,
	className,
	mode,
	theme,
	color,
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
				color,
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
	color: ButtonColor.white,
};

Button.propTypes = {
	tag: PropTypes.string,
	theme: PropTypes.oneOf(Object.values(ButtonTheme)),
	mode: PropTypes.oneOf(Object.values(ButtonMode)),
	size: PropTypes.oneOf(Object.values(ButtonSize)),
	fontFamily: PropTypes.oneOf(Object.values(ButtonFontFamily)),
	borderRadius: PropTypes.oneOf(Object.values(ButtonBorderRadius)),
	color: PropTypes.oneOf(Object.values(ButtonColor)),
	className: validClassNameHandler(),
	type: PropTypes.oneOf(['submit', 'button']),
};
export default Button;
