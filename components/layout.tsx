import styled from 'styled-components';
import Router from 'next/router';
import Nav from '../components/nav';
import Head from 'next/head';

const Wrapper = styled.div`
	max-width: 80rem;
	min-height: 100vh;
	margin: 1rem auto 0;
	background: ${(props) => props.theme.colors.background};

	.pagination {
		padding: 2rem 1.5rem;
		cursor: pointer;
		text-decoration: underline;
		color: black;
	}
`;

interface Props {
	children: React.ReactNode;
	withBackButton?: boolean;
	page?: number;
	title: string;
}

const Layout: React.FC<Props> = ({ children, withBackButton, page, title }) => {
	return (
		<Wrapper>
			<Head>
				<title>{title}</title>
			</Head>
			<Nav withBackButton={withBackButton} />
			{children}
			{page && (
				<div
					className='pagination'
					onClick={() => Router.push(`/?page=${page + 1}`)}
				>
					Next Page ({page + 1})
				</div>
			)}
		</Wrapper>
	);
};

export default Layout;
