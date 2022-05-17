import PostNewFeed from 'stories/components/postNewFeed/postNewFeed';
import PostSidebar from 'stories/components/postSidebar/PostSidebar';
import PageLayout from 'stories/layouts/PageLayout';
import DoubleLayer, {
	DoubleLayerFontFamily,
	DoubleLayerMode,
	DoubleLayerSize,
	DoubleLayerTheme,
} from 'stories/modules/doubleLayer/DoubleLayer';

const PostNewsFeedPage = () => {
	return (
		<PageLayout>
			<div className='flex-[0.6133]'>
				<DoubleLayer
					tag='h2'
					mode={DoubleLayerMode.left}
					theme={DoubleLayerTheme.white}
					size={DoubleLayerSize.xl}
					fontFamily={DoubleLayerFontFamily.azeret}
					className='mb-6 py-[1.125rem]'
				>
					張貼動態
				</DoubleLayer>
				<PostNewFeed />
			</div>
			<PostSidebar />
		</PageLayout>
	);
};

export default PostNewsFeedPage;
