import clsx from 'clsx';
import PropTypes from 'prop-types';
const Input = ({ className, ...props }) => {
	return (
		<input
			className={clsx(
				' w-full border-2 border-black px-6 leading-[2.9375rem]',
				className,
			)}
			{...props}
		/>
	);
};

Input.propTypes = {
	className: PropTypes.string,
};

export default Input;
