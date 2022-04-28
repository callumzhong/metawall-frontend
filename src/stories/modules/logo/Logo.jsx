import PropTypes from 'prop-types';
const Logo = ({ className, ...props }) => {
	const classes = '';
	return (
		<div className={classes`${className || ''}`}>
			<h1>MetaWall</h1>
			{props.children}
		</div>
	);
};

Logo.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Logo;
