import DoubleLayer from '../doubleLayer/DoubleLayer';
import NavbarItem from './NavbarItem';

const NavbarList = ({ paths }) => {
	return (
		<DoubleLayer
			tag='ul'
			mode='right'
			className='invisible absolute top-[2.7rem] right-0 z-10 w-[11.375rem] whitespace-nowrap bg-white text-center peer-checked:visible md:right-auto md:left-0'
		>
			{paths.map((i) => (
				<NavbarItem key={i}>{i}</NavbarItem>
			))}
		</DoubleLayer>
	);
};
export default NavbarList;
