import PostSidebar from 'stories/components/postSidebar/PostSidebar';
import PageLayout from 'stories/layouts/PageLayout';
import DoubleLayer from 'stories/modules/doubleLayer/DoubleLayer';

const PostNewsFeedPage = () => {
	return (
		<PageLayout>
			<div className='flex-[0.6133]'>
				<DoubleLayer
					mode='left'
					className='mb-6 bg-white py-[1.125rem] text-center font-azeret text-xl font-bold leading-6'
				>
					張貼動態
				</DoubleLayer>
			</div>
			<PostSidebar />
		</PageLayout>
	);
};

export default PostNewsFeedPage;