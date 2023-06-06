import styled from 'styled-components';

export const Container = styled.footer`
	width: 100%;
	height: 49.5vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #fff;
`;

export const ContainerVaga = styled.div`
	overflow-y: scroll;
	background-color: #fff;

	border-radius: 8px;

	&::-webkit-scrollbar {
		/* width: 0.5rem; */
		display: none;
	}
`;

export const ContainerVagancy = styled.div`
	background-color: #fff;

	width: 25rem;
`;

export const Title = styled.h1`
	font-size: 1.5rem;

	background-color: #fff;
	color: #000;

	margin: 8px 0;
`;

export const Modal = styled.div`
	width: 100%;
	margin-bottom: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: #f0e68c;

	padding: 0.5rem 0.5rem;

	* {
		background-color: #f0e68c;
		color: #000;
	}
`;

export const Button = styled.button`
	background-color: #b22222;
	color: #fff;

	border: none;

	cursor: pointer;

	padding: 0.5rem 0.5rem;

	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #ff0000;
	}
`;

export const ContainerNew = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0.2rem 0.3rem;

	font-weight: bold;

	background-color: #ffd700;

	* {
		background-color: #ffd700;
		cursor: default;
	}

	span {
		font-size: 0.8rem;
	}
`;

export const ContainerInfo = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;

	max-width: 250px;
	min-width: 250px;

	div {
		span {
			font-size: 0.8rem;
		}
	}

	h3 {
		font-size: 1rem;
	}
`;

export const Image = styled.img`
	width: 50px;
	height: 50px;

	border: 1px solid;
	border-radius: 50%;
`;
