import Button from 'stories/modules/button/Button';
import Input from 'stories/modules/input/Input';
import Logo from 'stories/modules/logo/Logo';

const LoginForm = (props) => {
	return (
		<div>
			<Logo>
				<p className='font-bold font-helvetica text-2xl leading-[29px]'>
					到元宇宙展開全新社交圈
				</p>
			</Logo>
			<form>
				<Input className='mb-4' type='text' placeholder='Email' />
				<Input className='mb-8' type='password' placeholder='Password' />
				<Button className='text-white bg-dark-blue w-full'>登入</Button>
			</form>
		</div>
	);
};

export default LoginForm;
