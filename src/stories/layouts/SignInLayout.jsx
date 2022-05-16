import Card from 'stories/modules/card/Card';

const SignInLayout = (props) => {
	return (
		<Card
			mode='shadow-left'
			position='absolute-center'
			backgroundColor='light-grayish-orange'
			className='container flex gap-[3.0469rem] px-6 py-7 2xl:py-[4.25rem] 2xl:px-[3.0625rem]'
		>
			{props.children}
		</Card>
	);
};

export default SignInLayout;
