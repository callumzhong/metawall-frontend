import { useRef } from 'react';
import Button, {
	ButtonBorderRadius,
	ButtonColor,
	ButtonMode,
	ButtonSize,
	ButtonTheme,
} from 'stories/modules/button/Button';
import Card, { CardMode } from 'stories/modules/card/Card';
import Textarea from 'stories/modules/textarea/Textarea';

const PostNewFeed = ({ mode, className, ...props }) => {
	const postSubmitHandler = (event) => {
		event.preventDefault();
	};
	const fileRef = useRef();
	const imageButtonClickHandler = () => {
		fileRef.current.click();
	};
	const uploadImageHandler = (e) => {
		const file = e.target.files[0];
		// 處理檔案上傳
		console.log(file);
	};
	return (
		<Card mode={CardMode['shadow-bottom']} className='p-8'>
			<form onSubmit={postSubmitHandler}>
				<label className='mb-4 block'>
					<div className='mb-1'>貼文內容</div>
					<Textarea className='h-[10.5625rem] w-full' />
				</label>
				<Button
					type='button'
					theme={ButtonTheme.black}
					size={ButtonSize.sm}
					borderRadius={ButtonBorderRadius.sm}
					className='mb-6 px-8'
					onClick={imageButtonClickHandler}
				>
					上傳圖片
				</Button>
				<input
					ref={fileRef}
					onChange={uploadImageHandler}
					className='hidden'
					type='file'
				/>
				<Button
					type='submit'
					theme={ButtonTheme.secondary}
					size={ButtonSize.lg}
					color={ButtonColor.black}
					mode={ButtonMode['outline-black']}
				>
					送出貼文
				</Button>
			</form>
		</Card>
	);
};

export default PostNewFeed;
