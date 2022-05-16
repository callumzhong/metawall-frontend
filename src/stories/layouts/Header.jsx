import userImage from 'stories/assets/user.png';
import Logo from '../modules/logo/Logo';
import Navbar from '../modules/navbar/Navbar';

const HEADER_PATHS = ['我的貼文牆', '修改個人資料', '登出'];
const Header = (props) => {
	return (
		<header className='border-b-[3px] border-black bg-white pt-3 pb-[.5625rem]'>
			<div className='container mx-auto flex items-center justify-between'>
				<Logo size='md' />
				<Navbar paths={HEADER_PATHS} image={userImage} name='Member' />
			</div>
		</header>
	);
};

export default Header;
