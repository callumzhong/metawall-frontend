import PropTypes from 'prop-types';

const Button = ({ className, ...props }) => {
	const classes = 'text-center';
	return (
		<button className={classes` ${className || ''}`} type={props.type}>
			{props.children}
		</button>
	);
};

Button.prototype = {
	className: PropTypes.string,
	children: PropTypes.any,
};
export default Button;
