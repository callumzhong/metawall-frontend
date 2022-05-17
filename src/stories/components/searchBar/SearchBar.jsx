import { ReactComponent as IconSearch } from 'stories/assets/search.svg';
import Select from 'stories/modules/select/select';
import SubmitText from 'stories/modules/submitText/SubmitText';

const SearchBar = ({ mode, className, ...props }) => {
	return (
		<div className={`flex w-full gap-3 ${className || ''}`}>
			<Select className='flex-[0.3152]'>
				<option value='des'>最新貼文</option>
				<option value='des'>最新貼文</option>
			</Select>
			<SubmitText
				placeholder='搜尋貼文'
				buttonContent={<IconSearch width={20} height={20} color='white' />}
				className='flex-[0.6848]'
			/>
		</div>
	);
};

export default SearchBar;
