import clsx from 'clsx';
import PropTypes from 'prop-types';
const styles = {
	lg: 'text-6xl leading-[1.4] text-dark-blue',
	md: 'text-[1.625rem] leading-9 black',
};
const Logo = (props) => {
	return (
		<h1 className={clsx('font-paytone', styles[props.size], props.className)}>
			MetaWall
		</h1>
	);
};

Logo.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Logo;
