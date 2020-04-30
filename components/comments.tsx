import styled from 'styled-components';
import { Comment as CommentType } from '../types/ApiStory';
import Comment from './comment';

const Wrapper = styled.section`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.5rem;
	border-top: 2px solid #eee;
	margin-top: 1rem;
	padding: 1.5rem;
`;

const Comments = ({ comments }: { comments: CommentType[] }) => {
	return (
		<Wrapper>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</Wrapper>
	);
};

export default Comments;
