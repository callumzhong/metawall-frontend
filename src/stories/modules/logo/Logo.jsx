import PropTypes from 'prop-types';
// const classes = {
// 	'size--lg': 'text-6xl leading-[1.4] text-dark-blue',
// 	'size--md': 'text-[1.625rem] leading-9 black',
// };
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
