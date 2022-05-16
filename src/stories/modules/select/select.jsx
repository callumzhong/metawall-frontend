import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './select.module.css';
const classes = {
	'mode--base': 'font-azeret border-2 border-black bg-white leading-[1.375]',
};

const Select = ({ mode, className, ...props }) => {
	return (
		<select
			className={clsx(styles.select, classes[`mode--${mode}`], className)}
			{...props}
		/>
	);
};

Select.defaultProps = {
	mode: 'base',
};

Select.propTypes = {
	mode: PropTypes.oneOf(['base']),
};

export default Select;
