import { Link } from 'react-router-dom';
import Button, { ButtonMode, ButtonTheme } from 'stories/modules/button/Button';
import ErrorMessage from 'stories/modules/errorMessage/ErrorMessage';
import Input from 'stories/modules/input/Input';
import Logo from 'stories/modules/logo/Logo';

const RegisterFrom = (props) => {
	return (
		<div className='w-full text-center'>
			<Logo size='lg' />
			<p className='mb-9 inline-block font-helvetica text-2xl font-bold leading-[2.0625rem]'>
				註冊
			</p>
			<form className='leading-none'>
				<label>
					<Input
						className='peer mb-4'
						type='text'
						placeholder='暱稱'
						required
					/>
					{false && (
						<ErrorMessage className='invisible mb-4 peer-invalid:visible'>
							暱稱至少 2 個字元以上
						</ErrorMessage>
					)}
				</label>
				<label>
					<Input className='peer mb-4' type='text' placeholder='Email' />
					{false && (
						<ErrorMessage className='invisible mb-4 peer-invalid:visible'>
							帳號已被註冊，請替換新的 Email！
						</ErrorMessage>
					)}
				</label>
				<label>
					<Input className='peer mb-8' type='password' placeholder='Password' />
					{false && (
						<ErrorMessage className='invisible mb-8 peer-invalid:visible'>
							密碼需至少 8 碼以上，並中英混合
						</ErrorMessage>
					)}
				</label>
				<Button
					type='submit'
					theme={ButtonTheme['gray']}
					mode={ButtonMode.outline}
					className='mb-4'
				>
					註冊
				</Button>
				<Link
					className='inline-block font-azeret leading-[1.375rem]'
					to='/login'
				>
					登入
				</Link>
			</form>
		</div>
	);
};

export default RegisterFrom;
