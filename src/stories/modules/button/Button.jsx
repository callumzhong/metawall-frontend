import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({ className, ...props }) => {
	const classes = 'text-center py-4';
	return (
		<button className={clsx(classes, className)} type={props.type}>
			{props.children}
		</button>
	);
};

Button.prototype = {
	className: PropTypes.string,
	children: PropTypes.any,
};
export default Button;
