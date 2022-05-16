import Media from '../media/Media';
import NavbarList from './NavbarList';
const Navbar = ({ paths, image, name }) => {
	return (
		<nav className='relative'>
			<input
				className='peer invisible absolute right-[99999px]'
				id='user-checkbox'
				type='checkbox'
			/>
			<label htmlFor='user-checkbox'>
				<Media image={image} width={30}>
					<span className='inline-block border-b-2 border-black px-[4.5px] pb-[4.5px] font-azeret font-bold leading-[19px]'>
						{name}
					</span>
				</Media>
			</label>
			<NavbarList paths={paths} />
		</nav>
	);
};

export default Navbar;
