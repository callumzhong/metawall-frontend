import clsx from 'clsx';

const ErrorMessage = ({ className, ...props }) => {
	return (
		<p className={clsx('text-left text-sm leading-5 text-froly', className)}>
			{props.children}
		</p>
	);
};
export default ErrorMessage;
