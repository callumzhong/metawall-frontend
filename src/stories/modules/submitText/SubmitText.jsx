import clsx from 'clsx';
import Input from '../input/Input';

const classes = {
	'padding-button--sm': 'px-3',
	'padding-button--md': 'px-12',
};

const SubmitText = ({
	mode,
	buttonContent,
	buttonPadding,
	className,
	placeholder,
	...props
}) => {
	const formSubmitHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form
			onSubmit={formSubmitHandler}
			className={`relative ${className || ''}`}
		>
			<Input
				placeholder={placeholder}
				mode={mode}
				style={{ paddingRight: buttonPadding === 'sm' ? '3.875rem' : '9rem' }}
				className='text-black'
			/>
			<button
				type='submit'
				className={clsx(
					'absolute right-0 h-full border-2 border-black bg-dark-blue',
					classes[`padding-button--${buttonPadding}`],
				)}
			>
				{buttonContent}
			</button>
		</form>
	);
};

SubmitText.defaultProps = {
	buttonPadding: 'sm',
	mode: 'icon-md',
};

export default SubmitText;
