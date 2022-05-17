import clsx from 'clsx';
import PropTypes from 'prop-types';
import Input, { InputMode } from '../input/Input';

export const SubmitTextSize = {
	md: 'px-12',
	sm: 'px-3',
};

const SubmitText = ({
	mode,
	className,
	buttonContent,
	placeholder,
	...props
}) => {
	const formSubmitHandler = (event) => {
		event.preventDefault();
	};
	let inputMode;
	if (mode === SubmitTextSize.sm) {
		inputMode = InputMode['icon-sm'];
	}
	if (mode === SubmitTextSize.md) {
		inputMode = InputMode['icon-md'];
	}
	return (
		<form
			onSubmit={formSubmitHandler}
			className={`relative ${className || ''}`}
		>
			<Input
				placeholder={placeholder}
				mode={inputMode}
				className={clsx('text-black', {
					'pr-[3.875rem]': mode === SubmitTextSize.sm,
					'pr-[9rem]': mode === SubmitTextSize.md,
				})}
			/>
			<button
				type='submit'
				className={clsx(
					'absolute right-0 h-full border-2 border-black bg-dark-blue',
					mode,
				)}
			>
				{buttonContent}
			</button>
		</form>
	);
};

SubmitText.defaultProps = {
	mode: SubmitTextSize.sm,
};

SubmitText.propTypes = {
	mode: PropTypes.oneOf(Object.values(SubmitTextSize)),
};

export default SubmitText;
