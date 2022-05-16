import PropTypes from 'prop-types';
import imgSvg from 'stories/assets/login.svg';

const LoginBanner = ({ className, ...props }) => {
	return (
		<img
			className={className}
			src={props.src || imgSvg}
			alt={props.alt || 'the login'}
		/>
	);
};

LoginBanner.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
};

export default LoginBanner;
