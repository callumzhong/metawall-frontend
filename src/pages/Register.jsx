import RegisterFrom from 'stories/components/registerFrom/RegisterFrom';
import LoginLayout from 'stories/layouts/LoginLayout';
import LoginBanner from 'stories/modules/loginBanner/loginBanner';

const RegisterPage = (props) => {
	return (
		<LoginLayout>
			<LoginBanner className='hidden lg:block' />
			<RegisterFrom />
		</LoginLayout>
	);
};

export default RegisterPage;
