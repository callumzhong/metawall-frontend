import userImage from 'stories/assets/user.png';
import NavbarList from './navbar-list/NavbarList';
const Navbar = (props) => {
	return (
		<nav className='relative'>
			<input
				className='peer invisible absolute right-[99999px]'
				id='user-checkbox'
				type='checkbox'
			/>
			<label for='user-checkbox'>
				<img
					className='mr-2 inline-block'
					width='30'
					src={userImage}
					alt='user'
				/>
				<span className='inline-block border-b-2 border-black px-[4.5px] pb-[4.5px] font-azeret font-bold leading-[19px]'>
					Member
				</span>
			</label>
			<NavbarList />
		</nav>
	);
};

export default Navbar;
