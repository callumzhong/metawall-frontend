import NewsFeedBlank from 'stories/components/newsFeedBlank/newsFeedBlank';
import PostNewsFeed from 'stories/components/postNewsFeed/PostNewsFeed';
import SearchBar from 'stories/components/searchBar/SearchBar';
import PageLayout from 'stories/layouts/PageLayout';

const Home = (props) => {
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
			<PostNewsFeed />
		</PageLayout>
	);
};

export default Home;
