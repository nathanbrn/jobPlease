import { X } from '@phosphor-icons/react';
import { VagaProps } from '../../types/vaga';
import {
	ContainerInfo,
	ContainerDados,
	ContainerDescription,
	ContainerInfoDados,
	ContainerTitleVaga,
	Title,
} from './styles';

export function ContainerInfoComp({
	vagasApi,
	vaga,
	button,
	setSelectedVaga,
}: {
	vagasApi: VagaProps[];
	vaga: any;
	button?: any;
	setSelectedVaga?: any;
}) {
	return (
		<ContainerInfo>
			{vagasApi
				.filter((v: VagaProps) => v._id === vaga)
				.map((vaga: VagaProps) => (
					<div
						key={vaga._id}
						style={{
							padding: '12px',

							display: 'flex',
							flexDirection: 'column',
							gap: '18px',
						}}>
						<ContainerTitleVaga
							style={{
								position: 'relative',
							}}>
							<h2>{vaga.title}</h2>
							<div>
								{vaga.salary === '' ? <></> : <span>{vaga.salary}</span>}
								<span>{vaga.location}</span>
								<span>{vaga.experience}</span>
							</div>
							<a target='_blank' href={vaga.url}>
								Candidatar-se a vaga
							</a>
							{button && (
								<button
									onClick={() => setSelectedVaga(false)}
									style={{
										position: 'absolute',
										top: '0',
										right: '0',
										background: 'none',
										border: 'none',
										cursor: 'pointer',
										fontSize: '24px',
									}}>
									<X />
								</button>
							)}
						</ContainerTitleVaga>
						<ContainerDados>
							<div>
								<Title>Dados da vaga</Title>
							</div>
							<ContainerInfoDados>
								<div>
									<h4>Tipo de vaga</h4>
									<p>{vaga.type}</p>
								</div>
								<div>
									<h4>Horário</h4>
									<p>{vaga.hour}</p>
								</div>
							</ContainerInfoDados>
						</ContainerDados>
						<ContainerDescription>
							<h3>Descrição</h3>
							<p>{vaga.description}</p>
							<div>
								<div>
									<h5>Requisitos</h5>
									<ul>{vaga.requirements}</ul>
								</div>
								<div>
									<h5>Diferencial</h5>
									<ul>{vaga.differentials}</ul>
								</div>
								<div>
									<h5>Beneficios</h5>
									<ul>{vaga.benefits}</ul>
								</div>
							</div>
						</ContainerDescription>
					</div>
				))}
		</ContainerInfo>
	);
}
