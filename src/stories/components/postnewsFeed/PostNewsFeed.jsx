import { Link } from 'react-router-dom';
import { ReactComponent as IconBell } from 'stories/assets/bell.svg';
import { ReactComponent as IconThumbUp } from 'stories/assets/thumb-up.svg';
import userImage from 'stories/assets/user.png';
import Button from 'stories/modules/button/Button';
import Card from 'stories/modules/card/Card';
import Media from 'stories/modules/media/Media';
const PostNewsFeed = ({ mode, className, ...props }) => {
	return (
		<Card position='sticky' className='flex-[0.3867] px-6 py-8'>
			<Button
				theme='primary'
				mode='shadow'
				type='submit'
				className='mb-4 w-full'
			>
				張貼動態
			</Button>
			<Media className='mb-[1.375rem]' image={userImage} width={50}>
				<Link className='ml-2 font-bold' to='/login'>
					邊緣小杰
				</Link>
			</Media>
			<Media
				className='mb-[1.375rem]'
				imageElement={
					<IconBell
						color='#000400'
						fill='#E2EDFA'
						width={50}
						height={50}
						className='mr-4 rounded-full border-[12px] border-[#E2EDFA] bg-[#E2EDFA] shadow-[0_0_0_2px_#000400]'
					/>
				}
				width={19}
			>
				<Link className='font-bold' to='/login'>
					追蹤名單
				</Link>
			</Media>
			<Media
				imageElement={
					<IconThumbUp
						color='#000400'
						fill='#E2EDFA'
						width={50}
						height={50}
						className='mr-4 rounded-full border-[12px] border-[#E2EDFA] bg-[#E2EDFA] shadow-[0_0_0_2px_#000400]'
					/>
				}
				width={50}
			>
				<Link className='font-bold' to='/login'>
					我按讚的文章
				</Link>
			</Media>
		</Card>
	);
};

export default PostNewsFeed;
