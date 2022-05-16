import clsx from 'clsx';
import PropTypes from 'prop-types';
const styles = {
	'theme--primary':
		'bg-dark-blue font-bold text-white hover:bg-golden-dream active:bg-golden-dream hover:text-black active:text-black',
	'theme--secondary': 'bg-gray font-bold text-white',
	'mode--shadow': 'shadow-[-2px_2px_0px_#000400] border-2 border-black',
	'mode--outline': 'border-2 border-[#808080]',
};

const Button = ({ className, mode, theme, type, ...props }) => {
	return (
		<button
			className={clsx(
				'rounded-lg text-center font-azeret leading-[3.125rem]',
				styles[`mode--${mode}`],
				styles[`theme--${theme}`],
				className,
			)}
			type={type}
		>
			{props.children}
		</button>
	);
};

Button.prototype = {
	theme: PropTypes.oneOf(['primary', 'secondary']),
	mode: PropTypes.oneOf(['shadow', 'outline']),
	className: PropTypes.string,
	type: PropTypes.oneOf(['submit', 'button']),
};
export default Button;
