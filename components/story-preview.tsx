import styled, { css } from 'styled-components';
import StoryType from '../types/Story';
import Link from 'next/link';

interface StoryStylesProps {
	withBigTitle?: boolean;
}
const Wrapper = styled.div<StoryStylesProps>`
	font-family: 'Montserrat', sans-serif;
	margin-top: 2.5rem;

	&:first-child {
		margin-top: 1.5rem;
	}

	h2 {
		margin: 0.5rem 0;

		${(p) =>
			p.withBigTitle
				? css`
						font-weight: bold;
						font-size: 2.2rem;
						font-family: 'Montserrat';
				  `
				: css`
						font-size: inherit;
						font-weight: 400;
				  `}
	}

	a,
	a:active {
		text-decoration: none;
		color: black;
	}
	a:hover {
		text-decoration: underline;
	}
	span {
		font-size: 1.2rem;
		font-weight: bold;
		color: black;

		&:not(:first-of-type) {
			margin-left: 1rem;
		}

		a {
			color: ${(p) => p.theme.colors.commentsText};
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

interface Props {
	story: StoryType;
	withTimeAgo?: boolean;
	withBigTitle?: boolean;
	withCommentsCountAsLink?: boolean;
}

const Story: React.FC<Props> = ({
	story: { id, url, title, points, comments_count, timeAgo },
	withTimeAgo,
	withBigTitle,
	withCommentsCountAsLink,
}) => {
	return (
		<Wrapper withBigTitle={withBigTitle}>
			<h2>
				<a href={url}>{title}</a>
			</h2>
			<span>{points} points</span>
			<span>
				{withCommentsCountAsLink ? (
					<Link href={`/story?id=${id}`}>
						<a>{comments_count} comments</a>
					</Link>
				) : (
					`${comments_count} comments`
				)}
			</span>
			{withTimeAgo && <span>{timeAgo}</span>}
		</Wrapper>
	);
};

export default Story;
