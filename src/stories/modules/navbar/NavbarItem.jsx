const NavbarItem = (props) => {
	return (
		<li className='border-b-2 border-black py-2 leading-6 last:border-b-0 hover:bg-light-grayish-orange'>
			{props.children}
		</li>
	);
};
export default NavbarItem;
