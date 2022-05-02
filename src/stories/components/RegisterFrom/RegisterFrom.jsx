import { Link } from 'react-router-dom';
import Button from 'stories/modules/button/Button';
import ErrorMessage from 'stories/modules/errorMessage/ErrorMessage';
import Input from 'stories/modules/input/Input';
import Logo from 'stories/modules/logo/Logo';

const RegisterFrom = (props) => {
	return (
		<div className='text-center'>
			<Logo>
				<span className='mb-9 inline-block font-helvetica text-2xl font-bold leading-[2.0625rem]'>
					註冊
				</span>
			</Logo>
			<form className='leading-none'>
				<Input className='mb-4' type='text' placeholder='暱稱' />
				{true && (
					<ErrorMessage className='mb-4 -mt-3'>
						暱稱至少 2 個字元以上
					</ErrorMessage>
				)}
				<Input className='mb-4' type='text' placeholder='Email' />
				{true && (
					<ErrorMessage className='mb-4 -mt-3'>
						帳號已被註冊，請替換新的 Email！
					</ErrorMessage>
				)}
				<Input className='mb-8' type='password' placeholder='Password' />
				{true && (
					<ErrorMessage className='mb-8 -mt-7'>
						密碼需至少 8 碼以上，並中英混合
					</ErrorMessage>
				)}
				<Button
					mode='outline'
					className='mb-4 w-full bg-gray font-bold text-white'
				>
					註冊
				</Button>
				<Link className='inline-block font-azeret leading-[1.375rem]' to='/'>
					登入
				</Link>
			</form>
		</div>
	);
};

export default RegisterFrom;
