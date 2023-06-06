import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: 4rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #fff;
`;

export const Title = styled.p`
	font-size: 1rem;
	font-weight: 700;

	margin-left: 12px;

	background-color: #fff;
	color: #000;

	cursor: default;
`;

export const ContainerButton = styled.div`
	background-color: #fff;

	display: flex;
	gap: 0.25rem;
	align-items: center;

	margin-right: 12px;
`;

export const ButtonOpenVagancy = styled.button`
	padding: 0.5rem 0.75rem;

	font-size: 0.8rem;

	background-color: #b22222;
	color: #fff;

	border: none;

	cursor: pointer;

	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #ff0000;
	}
`;

export const ButtonViewVagancy = styled.button`
	padding: 0.5rem 0.75rem;

	font-size: 0.8rem;

	background-color: #fff;
	color: #4f4f4f;

	border: none;

	cursor: pointer;

	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #f5f5f5;
	}
`;
