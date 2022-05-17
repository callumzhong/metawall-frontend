import Card, {
	CardMode,
	CardPosition,
	CardTheme,
} from 'stories/modules/card/Card';

const LoginLayout = (props) => {
	return (
		<Card
			mode={CardMode['shadow-left']}
			position={CardPosition['absolute-center']}
			theme={CardTheme.primary}
			className='container flex gap-[3.0469rem] px-6 py-7 2xl:py-[4.25rem] 2xl:px-[3.0625rem]'
		>
			{props.children}
		</Card>
	);
};

export default LoginLayout;
