import { useState } from 'react';
import styled from 'styled-components';
import { Comment as CommentType } from '../types/ApiStory';

const Wrapper = styled.div<{ show: boolean }>`
	&:not(:first-child) {
		margin-top: 1.8rem;
	}
	.user-name {
		font-weight: bold;
	}
	.content {
		font-weight: 500;
		word-wrap: break-word;
		p {
			margin-top: 0.5rem;
		}
	}
	.nested-comments {
		margin-top: 1.5rem;
		border-left: 1px solid #00000026;
		padding-left: 2rem;
	}
	a {
		color: ${(p) => p.theme.colors.main};
	}

	.show-nested {
		margin-top: 1rem;
		text-decoration: underline;
		color: #333333b8;
		cursor: pointer;
		&:hover {
			font-weight: 500;
		}
	}
`;

const Comment = ({
	comment: { user, content, comments },
}: {
	comment: CommentType;
}) => {
	const [showNested, setShowNested] = useState<boolean>(false);
	return (
		<Wrapper show={showNested}>
			<div className='user-name'>{user}</div>
			<div
				className='content'
				dangerouslySetInnerHTML={{ __html: content }}
			></div>
			<div onClick={() => setShowNested(!showNested)} className='show-nested'>
				{comments.length !== 0 ? 'show comments' : ''}
			</div>
			{showNested && (
				<div className='nested-comments'>
					{comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</div>
			)}
		</Wrapper>
	);
};

export default Comment;
