import Header from './Header';

const PageLayout = (props) => {
	return (
		<>
			<Header></Header>
			<main className='container flex flex-col-reverse gap-[1.6875rem]  py-[3.0625rem] lg:flex-row'>
				{props.children}
			</main>
		</>
	);
};

export default PageLayout;
