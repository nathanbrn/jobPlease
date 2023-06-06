import {
	Button,
	Container,
	ContainerInput,
	ContainerText,
	Input,
	Text,
	Title,
} from './styles';

export function Main() {
	return (
		<Container>
			<ContainerText>
				<Title>Encontre o emprego dos seus sonhos</Title>
				<Text>
					Somos o site com mais vagas de tecnologia do mercado, direcionado a
					home-office
				</Text>
			</ContainerText>
			{/* <ContainerInput>
				<Input
					placeholder='Digite a vaga que está buscando'
					type='text'
					name='search'
					id='search'
				/>
				<Button>Procurar</Button>
			</ContainerInput> */}
		</Container>
	);
}
