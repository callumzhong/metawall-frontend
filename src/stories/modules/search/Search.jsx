import PropTypes from 'prop-types';
import { ReactComponent as IconSearch } from 'stories/assets/search.svg';
import Input from '../input/Input';

const Search = ({ mode, className, ...props }) => {
	const formSubmitHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form
			onSubmit={formSubmitHandler}
			className={`relative ${className || ''}`}
		>
			<Input mode='icon' />
			<button
				type='submit'
				className='absolute right-0 h-full border-2 border-black bg-dark-blue px-3'
			>
				<IconSearch width={20} height={20} color='white' />
			</button>
		</form>
	);
};

Search.defaultProps = {
	mode: 'base',
};

Search.propTypes = {
	mode: PropTypes.oneOf(['base']),
};

export default Search;
