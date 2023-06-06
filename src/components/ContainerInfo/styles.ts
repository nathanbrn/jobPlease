import styled from 'styled-components';

export const ContainerInfo = styled.div`
	width: 45%;

	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 8px;

	background-color: #fffafa;

	display: flex;
	flex-direction: column;

	padding: 12px;

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const ContainerTitleVaga = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	h2 {
		font-size: 2rem;
		font-weight: 800;
	}

	div {
		display: flex;
		justify-content: flex-start;
		gap: 12px;
		margin-bottom: 12px;

		span {
			background-color: #696969;

			padding: 4px;

			border-radius: 4px;

			color: #fff;
		}
	}

	a {
		width: 50%;
		padding: 0.8rem 1.2rem;

		cursor: pointer;

		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		background-color: #a9a9a9;

		font-size: 1rem;
		font-weight: bold;
		text-align: center;

		transition: all 0.2s ease-in-out;

		:hover {
			background-color: #696969;
			color: #fff;
		}
	}
`;

export const ContainerDados = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Title = styled.h2`
	font-size: 1.6rem;
`;

export const ContainerInfoDados = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		h4 {
			margin-bottom: 8px;
		}

		p {
			margin-left: 8px;
		}
	}
`;

export const ContainerDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	h3 {
		font-size: 1.3rem;
	}

	p {
		font-size: 0.9rem;
		margin-left: 1.5rem;
		text-align: start;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 8px;

		h5 {
			font-size: 1rem;
		}

		ul {
			margin-left: 1.5rem;
			font-size: 0.9rem;
		}
	}
`;

export const ContainerInput = styled.div`
	width: 50%;
	display: flex;
	gap: 8px;
	justify-content: center;
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
