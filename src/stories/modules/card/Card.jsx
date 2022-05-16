import clsx from 'clsx';
import PropTypes from 'prop-types';

const classes = {
	'mode--base': 'border-2 border-black',
	'mode--shadow-left': 'border-2 border-black shadow-[-8px_8px_0px_#00040029]',
	'mode--shadow-bottom': 'border-2 border-black shadow-[0_3px_0px_#000400]',
	'position--absolute-center':
		'absolute top-1/2 left-4 right-4 mx-auto -translate-y-1/2',
	'position--sticky': 'sticky top-14 h-max',
	'backgroundColor--white': 'bg-white',
	'backgroundColor--light-grayish-orange': 'bg-light-grayish-orange',
	'borderRadius--lg': 'rounded-lg',
};

const Card = ({
	className,
	mode,
	position,
	backgroundColor,
	borderRadius,
	...props
}) => {
	return (
		<div
			className={clsx(
				classes[`mode--${mode}`],
				classes[`position--${position}`],
				classes[`backgroundColor--${backgroundColor}`],
				classes[`borderRadius--${borderRadius}`],
				className,
			)}
		>
			{props.children}
		</div>
	);
};

Card.defaultProps = {
	mode: 'base',
	backgroundColor: 'white',
};
Card.propTypes = {
	mode: PropTypes.oneOf(['base', 'shadow-left', 'shadow-bottom']),
	position: PropTypes.oneOf(['absolute-center', 'sticky']),
	backgroundColor: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Card;
