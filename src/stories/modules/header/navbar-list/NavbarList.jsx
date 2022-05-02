import NavbarItem from './NavbarItem';
const DATA = ['我的貼文牆', '修改個人資料', '登出'];

const NavbarList = (props) => {
	return (
		<ul className='invisible absolute top-[2.7rem] w-[11.375rem] whitespace-nowrap border-2 border-black bg-white text-center text-center shadow-[5px_7.5px_0px_white,5px_7.5px_0px_2px_black] peer-checked:visible'>
			{DATA.map((i) => (
				<NavbarItem>{i}</NavbarItem>
			))}
		</ul>
	);
};
export default NavbarList;
