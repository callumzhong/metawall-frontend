import clsx from 'clsx';
import PropTypes from 'prop-types';
const styles = {
	normal: 'shadow-[0_0_1px_2px_#000400]',
	shadow: 'border-2 border-black shadow-[-8px_8px_0px_#00040029]',
};
const Card = ({ className, mode, ...props }) => {
	return <div className={clsx(className, styles[mode])}>{props.children}</div>;
};

Card.propTypes = {
	mode: PropTypes.oneOf(['shadow']),
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Card;
