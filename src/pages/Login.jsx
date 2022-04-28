import LoginForm from 'stories/components/LoginForm/LoginForm';
import Banner from 'stories/modules/banner/Banner';
import Card from 'stories/modules/card/Card';

const Login = () => {
	return (
		<Card className='bg-light-grayish-orange flex self-center mx-auto px-[3.0625rem] py-[4.375rem] max-w-[54.3125rem] gap-2'>
			<Banner />
			<LoginForm />
		</Card>
	);
};

export default Login;
