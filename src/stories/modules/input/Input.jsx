import clsx from 'clsx';
import PropTypes from 'prop-types';

const classes = {
	'mode--base': 'w-full border-2 border-black px-6 leading-[2.9375rem]',
	'mode--icon-md': 'w-full border-2 border-black pl-4 leading-[2.625rem]',
	'mode--icon-sm': 'w-full border-2 border-black pl-4 leading-[2.25rem]',
};

const Input = ({ mode, className, ...props }) => {
	return (
		<input className={clsx(classes[`mode--${mode}`], className)} {...props} />
	);
};

Input.defaultProps = {
	mode: 'base',
};

Input.propTypes = {
	mode: PropTypes.oneOf(['base', 'icon-md', 'icon-sm']),
};

export default Input;
