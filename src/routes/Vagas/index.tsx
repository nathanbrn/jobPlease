import { Header } from '../../components/Header';
import {
	Container,
	ContainerHeader,
	ContainerRemuneration,
	ContainerVagas,
} from './styles';
import { Money, Suitcase, Check, Timer } from '@phosphor-icons/react';

import emptyList from '../../assets/emptyList.png';

import { api } from '../../utils/api';

import LogoEnterprice from '../../assets/LogoEnterprice.jpg';
import { useEffect, useState } from 'react';
import { VagaProps } from '../../types/vaga';
import ReactLoading from 'react-loading';
import { render } from 'react-dom';
import { ContainerInfoComp } from '../../components/ContainerInfo';

export function Vagas() {
	const [vagasApi, setVagasApi] = useState([]);
	const [vaga, setVaga] = useState<string>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api
			.get('/')
			.then(({ data }: any) => {
				setVagasApi(data);
				setIsLoading(false);
			})
			.catch((err: Error) => {
				render(
					<img width={500} src={emptyList} alt='' />,
					document.getElementById('vagas')
				);
				console.log(err);
			});
	}, []);

	return (
		<>
			<Header />
			<div
				id='vagas'
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#FFF',
				}}>
				{isLoading ? (
					<ReactLoading type='bubbles' width='10%' color='#f0e68c' />
				) : vagasApi.length > 0 ? (
					<Container>
						<ContainerVagas>
							{vagasApi.map((vaga: VagaProps) => (
								<button
									onClick={() => setVaga(vaga.id)}
									key={vaga.id}
									style={{
										border: '1px solid rgba(0, 0, 0, 0.1)',
										borderRadius: '8px',
										padding: '12px',

										display: 'flex',
										flexDirection: 'column',
										gap: '18px',

										cursor: 'pointer',

										backgroundColor: '#F0E68C',
									}}>
									<ContainerHeader>
										<div>
											<img width={50} height={50} src={LogoEnterprice} alt='' />
										</div>
										<div
											style={{
												textAlign: 'left',
											}}>
											<h2>{vaga.titulo}</h2>
											<p>{vaga.empresa}</p>
											<p>{vaga.location}</p>
											<p>{vaga.senioridade}</p>
										</div>
									</ContainerHeader>
									<ContainerRemuneration>
										{vaga.remuneracao === '' ? (
											<></>
										) : (
											<span>
												<Money />
												{vaga.remuneracao}
											</span>
										)}
										<span>
											<Suitcase />
											Tempo integral
											<Check />
										</span>
										{vaga.hour === '' ? (
											<></>
										) : (
											<span>
												<Timer />
												{vaga.hour}
											</span>
										)}
										<details
											style={{
												backgroundColor: '#F0E68C',
											}}>
											<summary
												style={{
													backgroundColor: 'rgba(0, 0, 0, 0.1)',
													padding: '4px',
													borderRadius: '4px',
													color: '#FFF',
												}}>
												Ver mais
											</summary>
											<strong
												style={{
													backgroundColor: '#F0E68C',
												}}>
												Descrição:
											</strong>
											<p
												style={{
													textAlign: 'left',
													marginBottom: '8px',
													backgroundColor: '#F0E68C',
												}}>
												{vaga.description}
											</p>
											<strong
												style={{
													backgroundColor: '#F0E68C',
												}}>
												Requisitos:
											</strong>
											<p
												style={{
													textAlign: 'left',
													marginBottom: '8px',
													backgroundColor: '#F0E68C',
												}}>
												{vaga.requisitos}
											</p>
											<a
												style={{
													backgroundColor: '#ff7f50',
													color: '#FFF',
													padding: '8px',
													borderRadius: '8px',
												}}
												target='_blank'
												href={vaga.link}>
												Candidatar-se
											</a>
										</details>
									</ContainerRemuneration>
								</button>
							))}
						</ContainerVagas>
						<ContainerInfoComp vaga={vaga} vagasApi={vagasApi} />
					</Container>
				) : (
					<img src={emptyList} alt='' />
				)}
			</div>
		</>
	);
}
