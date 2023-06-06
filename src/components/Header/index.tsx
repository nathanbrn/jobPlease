import { Link, useNavigate } from 'react-router-dom';
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
				<Link to='/vagas'>
					<ButtonViewVagancy>Ver vagas</ButtonViewVagancy>
				</Link>
				<Link to={'/criar'}>
					<ButtonOpenVagancy>Abrir vaga</ButtonOpenVagancy>
				</Link>
			</ContainerButton>
		</Container>
	);
}
