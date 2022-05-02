import Logo from '../logo/Logo';
import Navbar from './Navbar';

const Header = (props) => {
	return (
		<header className='border-b-[3px] border-black bg-white py-[.9375rem]'>
			<div className='mx-auto flex w-main items-center justify-between'>
				<Logo size='md' />
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
