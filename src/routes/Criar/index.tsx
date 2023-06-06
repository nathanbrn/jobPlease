import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Container, Title } from './styles';

export function Criar() {
	return (
		<>
			<Header />
			<Container>
				<Title>Divulgue a vaga preenchendo o formulário</Title>
				<Form />
			</Container>
		</>
	);
}
