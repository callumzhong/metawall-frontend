import LoginForm from 'stories/components/loginForm/LoginForm';
import LoginLayout from 'stories/layouts/LoginLayout';
import LoginBanner from 'stories/modules/loginBanner/loginBanner';

const LoginPage = () => {
	return (
		<LoginLayout>
			<LoginBanner className='hidden lg:block' />
			<LoginForm />
		</LoginLayout>
	);
};

export default LoginPage;
