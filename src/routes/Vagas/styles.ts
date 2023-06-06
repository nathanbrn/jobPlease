import styled from 'styled-components';

export const Container = styled.main`
	min-height: 90vh;
	width: 80%;

	max-height: 100vh;

	margin: 0 auto;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 8px;

	background-color: #fff;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;

export const ContainerVagas = styled.div`
	width: 45%;
	height: 100%;

	padding: 12px;

	border-radius: 8px;

	background-color: #fffafa;

	display: flex;
	flex-direction: column;
	gap: 12px;

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 600px) {
		width: 70%;
	}
	@media screen and (max-width: 450px) {
		width: 90%;
	}
`;

export const ContainerHeader = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 8px;

	background-color: #f0e68c;

	* {
		background-color: #f0e68c;
	}

	img {
		border-radius: 8px;
	}
`;

export const ContainerRemuneration = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 12px;

	background-color: #f0e68c;

	span {
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 8px;

		display: flex;
		gap: 4px;
		justify-content: center;
		align-items: center;

		background-color: #ff7f50;
		color: #fff;

		padding: 2px;

		* {
			background-color: #ff7f50;
			color: #fff;
		}
	}

	@media screen and (min-width: 600px) {
		details {
			display: none;
		}
	}
`;
