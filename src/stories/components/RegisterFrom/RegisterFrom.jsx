import { Link } from 'react-router-dom';
import Button from 'stories/modules/button/Button';
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
				<Input className='mb-4' type='text' placeholder='Email' />
				<Input className='mb-8' type='password' placeholder='Password' />
				<Button
					mode='shadow'
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
