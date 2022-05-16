import userImage from 'stories/assets/user.png';
import SubmitText from 'stories/modules/submitText/SubmitText';

const PostMessage = ({ mode, className, ...props }) => {
	return (
		<div className='flex items-center text-white'>
			<img
				className='mr-[.5313rem] rounded-full'
				width={40}
				src={userImage}
				alt='user'
			/>
			<SubmitText
				mode='icon-sm'
				buttonPadding='md'
				buttonContent='留言'
				className='w-full'
				placeholder='留言...'
			/>
		</div>
	);
};

export default PostMessage;
