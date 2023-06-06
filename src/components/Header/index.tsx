import { useNavigate } from 'react-router-dom';
import {
	ButtonViewVagancy,
	ButtonOpenVagancy,
	Container,
	ContainerButton,
	Title,
} from './styles';

interface HeaderProps {
	children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
	const navigate = useNavigate();

	function handleNavigateToHome() {
		navigate('/');
	}

	return (
		<Container>
			<Title onClick={handleNavigateToHome}>Job, Please!</Title>
			{children ? children : null}
			<ContainerButton>
				<ButtonViewVagancy href='/vagas'>Ver vagas</ButtonViewVagancy>
				<ButtonOpenVagancy href='/criar'>Abrir vaga</ButtonOpenVagancy>
			</ContainerButton>
		</Container>
	);
}
