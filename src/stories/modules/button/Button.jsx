import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
	'theme--primary':
		'bg-dark-blue font-bold text-white hover:bg-golden-dream hover:text-black',
	'theme--secondary': 'bg-gray font-bold text-white',
	'mode--shadow': 'shadow-[-2px_2px_0px_#000400] border-2 border-black',
	'mode--outline': 'border-2 border-[#808080]',
};
const Button = ({ tag, className, mode, theme, type, ...props }) => {
	const DynamicTagName = tag === 'link' ? Link : tag;
	return (
		<DynamicTagName
			className={clsx(
				'rounded-lg text-center font-azeret leading-[3.125rem]',
				styles[`mode--${mode}`],
				styles[`theme--${theme}`],
				className,
			)}
			type={type}
			{...props}
		/>
	);
};

Button.defaultProps = {
	tag: 'button',
};
Button.prototype = {
	tag: PropTypes.string,
	theme: PropTypes.oneOf(['primary', 'secondary']),
	mode: PropTypes.oneOf(['shadow', 'outline']),
	className: PropTypes.string,
	type: PropTypes.oneOf(['submit', 'button']),
};
export default Button;
