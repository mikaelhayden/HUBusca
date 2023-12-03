import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import type { Repo } from '../models';

interface Props {
	data: Repo;
}

const Container = styled.div`
	display: flex;
	padding: 1.5rem;
	gap: 1rem;
	cursor: pointer;
	box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.39);
	border-radius: 8px;
	background-color: #02173b;
	
	h3{
		text-decoration: none;
	}
	:hover {
		background: rgba(255, 255, 255, 0.4);
	}
`;

export function CardRepo({ data }: Props): ReactElement {
	return (
		<Link to= {data.html_url}
			target="_blank">
			<Container>
				<h3>{data.name}</h3>
			</Container>
		</Link>
	);
}