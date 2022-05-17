import PropTypes from 'prop-types';
import userImage from 'stories/assets/user.png';
import Card, { CardBorderRadius, CardMode } from 'stories/modules/card/Card';
import Media from 'stories/modules/media/Media';
import PostMessage from '../postMessage/PostMessage';

const NewsFeed = ({ mode, className, ...props }) => {
	return (
		<Card
			mode={CardMode['shadow-bottom']}
			borderRadius={CardBorderRadius.lg}
			className='p-6'
		>
			<Media image={userImage} width={45}>
				<div className='mb-4'>
					<div className='font-bold'>邊緣小杰</div>
					<div className='font-baloo text-xs font-bold leading-5 text-dawn'>
						2022/1/10 12:00
					</div>
				</div>
			</Media>
			<p className='mb-5'>{'外面看起來就超冷.... 我決定回被窩繼續睡....>.<'}</p>
			<img
				className='mb-5 block h-[157px] w-full rounded-lg object-cover shadow-[0_0_0_2px_#000400]'
				src='https://source.unsplash.com/random'
				alt=''
			/>
			<PostMessage />
		</Card>
	);
};

NewsFeed.defaultProps = {
	mode: 'tailwindcssName',
};

NewsFeed.propTypes = {
	mode: PropTypes.oneOf(['tailwindcssName']),
};

export default NewsFeed;
