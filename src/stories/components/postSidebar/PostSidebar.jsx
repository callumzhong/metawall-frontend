import { Link } from 'react-router-dom';
import { ReactComponent as IconBell } from 'stories/assets/bell.svg';
import { ReactComponent as IconThumbUp } from 'stories/assets/thumb-up.svg';
import userImage from 'stories/assets/user.png';
import Button, { ButtonMode, ButtonTheme } from 'stories/modules/button/Button';
import Card, { CardPosition } from 'stories/modules/card/Card';
import Media from 'stories/modules/media/Media';
const PostSidebar = ({ mode, className, ...props }) => {
	return (
		<Card
			position={CardPosition['sticky-lg']}
			className='flex-[0.3867] px-6 py-8'
		>
			<Button
				tag='link'
				to='/post'
				theme={ButtonTheme.primary}
				mode={ButtonMode.shadow}
				type='submit'
				className='mb-4'
			>
				張貼動態
			</Button>
			<Media
				className='relative mb-[1.375rem]'
				image={userImage}
				width={50}
				children={
					<Link
						className='stretched-link ml-2 font-bold hover:text-dark-blue'
						to='/login'
					>
						邊緣小杰
					</Link>
				}
			/>
			<Media
				className='relative mb-[1.375rem]'
				imageElement={
					<IconBell
						width={50}
						height={50}
						className='mr-4 rounded-full border-[12px] border-[#E2EDFA] bg-[#E2EDFA] shadow-[0_0_0_2px_#000400] peer-hover:border-dark-blue peer-hover:bg-dark-blue peer-hover:text-white'
					/>
				}
				width={19}
				children={
					<Link
						className='stretched-link peer font-bold hover:text-dark-blue'
						to='/login'
					>
						追蹤名單
					</Link>
				}
			/>
			<Media
				className='relative'
				imageElement={
					<IconThumbUp
						width={50}
						height={50}
						className='mr-4 rounded-full border-[12px] border-[#E2EDFA] bg-[#E2EDFA] shadow-[0_0_0_2px_#000400] peer-hover:border-dark-blue peer-hover:bg-dark-blue peer-hover:text-white'
					/>
				}
				width={50}
				children={
					<Link
						className='stretched-link peer font-bold hover:text-dark-blue'
						to='/login'
					>
						我按讚的文章
					</Link>
				}
			/>
		</Card>
	);
};

export default PostSidebar;
