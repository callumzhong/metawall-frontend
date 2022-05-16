import Header from './Header';

const PageLayout = (props) => {
	return (
		<>
			<Header></Header>
			<main className='container flex gap-[1.6875rem] py-[3.0625rem]'>
				{props.children}
			</main>
		</>
	);
};

export default PageLayout;
