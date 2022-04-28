import LoginForm from 'stories/components/LoginForm/LoginForm';
import Banner from 'stories/modules/banner/Banner';
import Card from 'stories/modules/card/Card';

const Login = () => {
	return (
		<Card
			mode='shadow'
			className='mx-auto flex max-w-[54.3125rem] gap-[3.0469rem] self-center bg-light-grayish-orange px-[3.0625rem] py-[4.25rem]'
		>
			<Banner />
			<LoginForm />
		</Card>
	);
};

export default Login;
