import PropTypes from 'prop-types';
import imgSvg from '../../assets/login.svg';
const Banner = (props) => {
	return (
		<img
			className={`block ${props.className || ''}`}
			src={props.src || imgSvg}
			alt={props.alt || 'the login'}
		/>
	);
};

Banner.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
};

export default Banner;
