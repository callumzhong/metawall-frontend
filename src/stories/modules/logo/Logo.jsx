import PropTypes from 'prop-types';
const Logo = ({ size }) => {
	if (size === 'lg') {
		return (
			<h1 className='font-paytone text-6xl leading-[5.25rem] text-dark-blue'>
				MetaWall
			</h1>
		);
	}
	if (size === 'md') {
		return <h1 className='font-paytone text-3xl leading-9'>MetaWall</h1>;
	}
};

Logo.propTypes = {
	size: PropTypes.string.isRequired,
};

export default Logo;
