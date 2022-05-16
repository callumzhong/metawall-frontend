import NewsFeedBlank from 'stories/components/newsFeedBlank/newsFeedBlank';
import PostSidebar from 'stories/components/postSidebar/PostSidebar';
import SearchBar from 'stories/components/searchBar/SearchBar';
import PageLayout from 'stories/layouts/PageLayout';

const HomePage = (props) => {
	return (
		<PageLayout>
			<div className='flex-[0.6133]'>
				<SearchBar className='mb-4' />
				<div className='flex flex-col gap-4'>
					{/* {new Array(10).fill(0).map((i, idx) => (
						<Newsfeed key={idx} />
					))} */}
					<NewsFeedBlank />
				</div>
			</div>
			<PostSidebar />
		</PageLayout>
	);
};

export default HomePage;
