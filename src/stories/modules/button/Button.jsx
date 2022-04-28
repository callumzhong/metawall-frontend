import clsx from 'clsx';
import PropTypes from 'prop-types';
const styles = {
	shadow: 'shadow-[-2px_2px_0px_#000400] border-2 border-black',
};

const Button = ({ className, mode, ...props }) => {
	return (
		<button
			className={clsx(
				'rounded-lg text-center font-azeret leading-[3.125rem]',
				className,
				styles[mode],
			)}
			type={props.type}
		>
			{props.children}
		</button>
	);
};

Button.prototype = {
	mode: PropTypes.oneOf('shadow'),
	className: PropTypes.string,
	children: PropTypes.any,
};
export default Button;
