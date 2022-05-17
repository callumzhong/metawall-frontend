import { useRef } from 'react';
import Button, {
	ButtonBorderRadius,
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
	const uploadImageHandler = () => {
		fileRef.current.click();
	};
	return (
		<Card mode={CardMode['shadow-bottom']} className='p-8'>
			<form onSubmit={postSubmitHandler}>
				<label className='mb-4'>
					<div className='mb-1'>貼文內容</div>
					<Textarea className='h-[10.5625rem] w-full' />
				</label>
				<Button
					theme={ButtonTheme.black}
					size={ButtonSize.sm}
					borderRadius={ButtonBorderRadius.sm}
					className='px-8'
					onClick={uploadImageHandler}
				>
					上傳圖片
				</Button>
				<input ref={fileRef} className='hidden' type='file' />
			</form>
		</Card>
	);
};

export default PostNewFeed;
