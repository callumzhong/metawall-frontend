import clsx from 'clsx';
import PropTypes from 'prop-types';

export const CardMode = {
	'shadow-left': 'shadow-[-8px_8px_0px_#00040029]',
	'shadow-bottom': 'shadow-[0_3px_0px_#000400]',
};

export const CardPosition = {
	'absolute-center': 'absolute top-1/2 left-4 right-4 mx-auto -translate-y-1/2',
	sticky: 'sticky top-14 h-max',
	'sticky-lg': 'lg:sticky top-14 h-max',
};

export const CardTheme = {
	primary: 'bg-light-grayish-orange',
	white: 'bg-white',
};

export const CardBorderRadius = {
	lg: 'rounded-lg',
};

Object.freeze(CardMode);
Object.freeze(CardPosition);
Object.freeze(CardTheme);
Object.freeze(CardBorderRadius);

const Card = ({ className, mode, position, theme, borderRadius, ...props }) => {
	return (
		<div
			className={clsx(
				'border-2 border-black',
				className,
				mode,
				position,
				theme,
				borderRadius,
			)}
		>
			{props.children}
		</div>
	);
};

Card.defaultProps = {
	theme: CardTheme.white,
};

Card.propTypes = {
	mode: PropTypes.oneOf(Object.values(CardMode)),
	position: PropTypes.oneOf(Object.values(CardPosition)),
	theme: PropTypes.oneOf(Object.values(CardTheme)),
	borderRadius: PropTypes.oneOf(Object.values(CardBorderRadius)),
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Card;
