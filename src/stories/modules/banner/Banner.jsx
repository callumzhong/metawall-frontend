import clsx from 'clsx';
import PropTypes from 'prop-types';
import imgSvg from 'stories/assets/login.svg';

const Banner = ({ className, ...props }) => {
	return (
		<img
			className={clsx('block', className)}
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
