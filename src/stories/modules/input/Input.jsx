import clsx from 'clsx';
import PropTypes from 'prop-types';
const Input = ({ className, ...props }) => {
	const classes = 'border-2 border-black px-6 py-4 w-full';
	return <input className={clsx(classes, className)} {...props} />;
};

Input.propTypes = {
	className: PropTypes.string,
};

export default Input;
