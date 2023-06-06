import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	height: 40vh;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #000;
`;

export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	background-color: #000;
`;

export const ContainerInput = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
	justify-content: center;
	background-color: #000;
`;

export const Input = styled.input`
	width: 50%;

	padding-left: 8px;

	background-color: #fff;
`;

export const Button = styled.button`
	padding: 0.5rem 3rem;

	background-color: #b22222;
	color: #fff;

	border: none;

	cursor: pointer;

	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: #ff0000;
	}
`;

export const Title = styled.h2`
	font-size: 2rem;
	text-align: center;

	background-color: #000;
	color: #fff;
`;

export const Text = styled.p`
	font-size: 0.8rem;
	text-align: center;

	background-color: #000;
	color: #fff;
`;
