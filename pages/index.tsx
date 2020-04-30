import axios from 'axios';

import Layout from '../components/layout';
import StoriesList from '../components/stories-list';
import Story from '../types/Story';
import ApiStory from '../types/ApiStory';
import { NextPageContext } from 'next';

interface NextContext extends NextPageContext {
	query: {
		page?: string;
	};
}

export async function getServerSideProps({ query }: NextContext) {
	let stories: Story[];
	let page: number | null = Number(query.page ?? 1);
	console.log(page, query);
	try {
		const res = await axios.get<ApiStory[]>(
			`http://node-hnapi.herokuapp.com/news?page=${page}`
		);
		stories = res.data.map((story) => ({
			id: story.id,
			url: story.url,
			title: story.title,
			points: story.points,
			comments_count: story.comments_count,
		}));
	} catch (error) {
		stories = [];
		page = null;
	}

	return {
		props: {
			stories,
			page: page,
		},
	};
}

interface Props {
	stories: Story[];
	page: number;
}

const Home: React.FC<Props> = ({ stories, page }) => {
	return (
		<div className='container'>
			<main>
				<Layout
					withBackButton={page > 1 ? true : false}
					title={'Hacker News'}
					page={page}
				>
					{stories.length === 0 ? (
						<div style={{ textAlign: 'center', marginTop: '5rem' }}>
							Something Went Wrong While Fetching{' '}
						</div>
					) : (
						<StoriesList stories={stories} />
					)}
				</Layout>
			</main>
		</div>
	);
};

export default Home;
