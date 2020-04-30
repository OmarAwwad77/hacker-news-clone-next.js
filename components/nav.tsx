import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.nav`
	background: ${(p) => p.theme.colors.main};
	padding: 1rem 2rem;
`;

const H1 = styled.h1`
	${(p) => p.theme.titles};
	display: inline-block;

	a,
	a:hover,
	a:active {
		text-decoration: none;
		color: black;
	}
`;

const BackButton = styled.span`
	margin-right: 2rem;
	cursor: pointer;
`;

interface Props {
	withBackButton?: boolean;
}

const Nav: React.FC<Props> = ({ withBackButton }) => {
	return (
		<Wrapper>
			{withBackButton && (
				<BackButton onClick={() => Router.back()}>&#8592;</BackButton>
			)}
			<H1>
				{' '}
				<Link href='/'>
					<a>Hacker News</a>
				</Link>{' '}
			</H1>
		</Wrapper>
	);
};

export default Nav;
