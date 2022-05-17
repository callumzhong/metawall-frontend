import clsx from 'clsx';
import styles from './select.module.css';

const Select = ({ mode, className, ...props }) => {
	return (
		<select
			className={clsx(
				'border-2 border-black bg-white font-azeret leading-[1.375]',
				styles.select,
				className,
			)}
			{...props}
		/>
	);
};

export default Select;
