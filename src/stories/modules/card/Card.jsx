import clsx from 'clsx';
import PropTypes from 'prop-types';

const Card = ({ className, ...props }) => {
	return (
		<div className={clsx('border-2 border-black', className)}>
			{props.children}
		</div>
	);
};

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Card;
