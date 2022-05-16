import LoginForm from 'stories/components/loginForm/LoginForm';
import SignInLayout from 'stories/layouts/SignInLayout';
import LoginBanner from 'stories/modules/loginBanner/loginBanner';

const Login = () => {
	return (
		<SignInLayout>
			<LoginBanner className='hidden lg:block' />
			<LoginForm />
		</SignInLayout>
	);
};

export default Login;
