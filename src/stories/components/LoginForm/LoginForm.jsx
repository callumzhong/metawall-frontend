import { Link } from 'react-router-dom';
import Button from 'stories/modules/button/Button';
import ErrorMessage from 'stories/modules/errorMessage/ErrorMessage';
import Input from 'stories/modules/input/Input';
import Logo from 'stories/modules/logo/Logo';

const LoginForm = (props) => {
	const loginSubmitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div className='w-full text-center'>
			<Logo size='lg' />
			<p className='mb-9 inline-block font-helvetica text-2xl font-bold leading-[1.375]'>
				到元宇宙展開全新社交圈
			</p>
			<form className='leading-none' onSubmit={loginSubmitHandler}>
				<Input className='mb-4' type='text' placeholder='Email' />
				<Input className='mb-8' type='password' placeholder='Password' />
				{false && (
					<ErrorMessage className='mb-4'>
						帳號或密碼錯誤，請重新輸入！
					</ErrorMessage>
				)}
				<Button
					theme='primary'
					mode='shadow'
					type='submit'
					className='mb-4 w-full'
				>
					登入
				</Button>
				<Link
					className='inline-block font-azeret leading-[1.375rem]'
					to='/register'
				>
					註冊帳號
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
