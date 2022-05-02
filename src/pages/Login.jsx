import LoginForm from 'stories/components/LoginForm/LoginForm';
import Banner from 'stories/modules/banner/Banner';
import Card from 'stories/modules/card/Card';

const Login = () => {
	return (
		<Card
			mode='shadow'
			className='absolute top-1/2 left-1/2 flex w-main -translate-x-1/2 -translate-y-1/2 gap-[3.0469rem] bg-light-grayish-orange px-[3.0625rem] py-[4.25rem]'
		>
			<Banner />
			<LoginForm />
		</Card>
	);
};

export default Login;
