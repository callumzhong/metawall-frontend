import RegisterFrom from 'stories/components/registerFrom/RegisterFrom';
import SignInLayout from 'stories/layouts/SignInLayout';
import LoginBanner from 'stories/modules/loginBanner/loginBanner';

const Register = (props) => {
	return (
		<SignInLayout>
			<LoginBanner className='hidden lg:block' />
			<RegisterFrom />
		</SignInLayout>
	);
};

export default Register;
