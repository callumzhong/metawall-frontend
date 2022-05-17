import DoubleLayer, {
	DoubleLayerMode,
	DoubleLayerPosition,
} from '../doubleLayer/DoubleLayer';
import NavbarItem from './NavbarItem';

const NavbarList = ({ paths }) => {
	return (
		<DoubleLayer
			tag='ul'
			mode={DoubleLayerMode.right}
			position={DoubleLayerPosition.adjacent}
			className='w-[11.375rem] whitespace-nowrap'
		>
			{paths.map((i) => (
				<NavbarItem key={i}>{i}</NavbarItem>
			))}
		</DoubleLayer>
	);
};
export default NavbarList;
