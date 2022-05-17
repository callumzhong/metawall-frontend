import clsx from 'clsx';
import PropTypes from 'prop-types';

export const InputMode = {
	base: 'w-full border-2 border-black px-6 leading-[2.9375rem]',
	'icon-md': 'w-full border-2 border-black pl-4 h-full',
	'icon-sm': 'w-full border-2 border-black pl-4 h-full',
};

const Input = ({ mode, className, ...props }) => {
	return <input className={clsx(mode, className)} {...props} />;
};

Input.defaultProps = {
	mode: InputMode.base,
};

Input.propTypes = {
	mode: PropTypes.oneOf(Object.values(InputMode)),
	className: PropTypes.string,
};

export default Input;
