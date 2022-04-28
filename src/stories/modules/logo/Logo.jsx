import clsx from 'clsx';
import PropTypes from 'prop-types';
const Logo = (props) => {
	return (
		<>
			<h1
				className={clsx(
					'font-paytone text-6xl leading-[1.4] text-dark-blue',
					props.className,
				)}
			>
				MetaWall
			</h1>
			{props.children}
		</>
	);
};

Logo.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Logo;
