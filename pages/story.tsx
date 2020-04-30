import Layout from '../components/layout';
import { Wrapper as StoryPreviewWrapper } from '../components/stories-list';
import { NextPageContext } from 'next';
import axios from 'axios';
import StoryType from '../types/Story';
import ApiStory from '../types/ApiStory';
import StoryPreview from '../components/story-preview';
import Comments from '../components/comments';

interface Context extends NextPageContext {
	query: {
		id: string;
	};
}
export async function getServerSideProps({ query }: Context) {
	let story: StoryType | null;
	try {
		const res = await axios.get<ApiStory>(
			`http://node-hnapi.herokuapp.com/item/${query.id}`
		);

		const data = res.data;
		story = {
			id: data.id,
			url: data.url,
			user: data.user,
			comments_count: data.comments_count,
			comments: data.comments,
			points: data.points,
			timeAgo: data.time_ago,
			title: data.title,
		};
	} catch (error) {
		story = null;
	}

	return {
		props: { story },
	};
}

interface Props {
	story: StoryType;
}

const Story: React.FC<Props> = ({ story }) => {
	const { comments } = story;
	return (
		<Layout title={story.title} withBackButton>
			<StoryPreviewWrapper>
				<StoryPreview withBigTitle story={story} withTimeAgo />
			</StoryPreviewWrapper>
			{comments && <Comments comments={comments} />}
		</Layout>
	);
};

export default Story;
