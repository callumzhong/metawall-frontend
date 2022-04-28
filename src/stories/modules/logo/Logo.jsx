import clsx from 'clsx';
import PropTypes from 'prop-types';
const Logo = ({ className, ...props }) => {
	return (
		<div className={clsx('mb-9 text-center', className)}>
			<h1 className='font-paytone text-6xl leading-[1.4] text-dark-blue'>
				MetaWall
			</h1>
			{props.children}
		</div>
	);
};

Logo.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Logo;
