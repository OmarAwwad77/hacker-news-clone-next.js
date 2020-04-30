import styled from 'styled-components';
import Story from '../types/Story';
import StoryPreview from './story-preview';

export const Wrapper = styled.div`
	padding: 0 1.5rem;
`;

interface Props {
	stories: Story[];
}
const StoriesList: React.FC<Props> = ({ stories }) => {
	return (
		<Wrapper>
			{stories.map((story) => (
				<StoryPreview key={story.id} story={story} withCommentsCountAsLink />
			))}
		</Wrapper>
	);
};

export default StoriesList;
