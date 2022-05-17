import userImage from 'stories/assets/user.png';
import SubmitText, {
	SubmitTextSize,
} from 'stories/modules/submitText/SubmitText';

const PostMessage = ({ mode, className, ...props }) => {
	return (
		<div className='flex text-white'>
			<img
				className='mr-[.5313rem] rounded-full'
				width={40}
				src={userImage}
				alt='user'
			/>
			<SubmitText
				mode={SubmitTextSize.md}
				buttonContent='留言'
				className='w-full'
				placeholder='留言...'
			/>
		</div>
	);
};

export default PostMessage;
