import Search from 'stories/modules/search/Search';
import Select from 'stories/modules/select/select';

const SearchBar = ({ mode, className, ...props }) => {
	return (
		<div className={`flex w-full gap-3 ${className || ''}`}>
			<Select className='flex-[0.3152]'>
				<option value='des'>最新貼文</option>
				<option value='des'>最新貼文</option>
			</Select>
			<Search className='flex-[0.6848]' />
		</div>
	);
};

SearchBar.propTypes = {};

export default SearchBar;
