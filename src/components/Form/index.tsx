import {
	Button,
	ContainerForm,
	ContainerInput,
	Input,
	InputCheck,
	Label,
	Span,
	TextArea,
	Title,
} from './styles';

import { api } from '../../utils/api';
import { VagaProps } from '../../types/vaga';

import { useState } from 'react';
import { render } from 'react-dom';

export function Form() {
	const [titulo, setTitulo] = useState('');
	const [senioridade, setSenioridade] = useState('Estagiário');
	const [empresa, setEmpresa] = useState('');
	const [type, setType] = useState('Tempo Integral');
	const [hour, setHour] = useState('');
	const [remuneracao, setRemuneracao] = useState('');
	const [location, setLocation] = useState('');
	const [description, setDescription] = useState('');
	const [requisitos, setRequisitos] = useState('');
	const [diferencial, setDiferencial] = useState('');
	const [beneficios, setBeneficios] = useState('');
	const [link, setLink] = useState('');

	const vaga: VagaProps = {
		titulo: titulo,
		senioridade: senioridade,
		empresa: empresa,
		type: type,
		hour: hour,
		remuneracao: remuneracao,
		location: location,
		description: description,
		requisitos: requisitos,
		diferencial: diferencial,
		beneficios: beneficios,
		link: link,
	};

	function handleCreateNewVaga() {
		api
			.post('/', vaga)
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		const { key } = event;
		const { value } = event.target as HTMLInputElement;

		// Verificar se a tecla pressionada é um número ou uma tecla de controle (backspace, delete, setas)
		if (!isNumberKey(key) && !isControlKey(key)) {
			event.preventDefault();
			return;
		}

		// Obter apenas os números do valor atual
		const numericValue = getNumericValue(value);

		// Converter o valor numérico para uma string formatada com a máscara
		const formattedValue = formatCurrency(numericValue);

		// Atualizar o estado com o valor formatado
		setRemuneracao(formattedValue);
	}

	// Verificar se a tecla pressionada é um número
	function isNumberKey(key: string) {
		return /^[0-9]$/.test(key);
	}

	// Verificar se a tecla pressionada é uma tecla de controle (backspace, delete, setas)
	function isControlKey(key: string) {
		return /^(Backspace|Delete|ArrowLeft|ArrowRight)$/.test(key);
	}

	// Obter apenas os números do valor atual
	function getNumericValue(value: string) {
		return value.replace(/[^\d]/g, '');
	}

	// Converter o valor numérico para uma string formatada com a máscara
	function formatCurrency(value: string) {
		const currencySymbol = 'R$';

		const parts = value.split('');
		const integerPart = parts.slice(0, -1).join('');
		const decimalPart = parts.slice(-1).join('');

		let formattedValue = '';

		for (let i = integerPart.length - 1, j = 0; i >= 0; i--, j++) {
			if (j > 0 && j % 3 === 0) {
				formattedValue = '.' + formattedValue;
			}
			formattedValue = integerPart[i] + formattedValue;
		}

		formattedValue = currencySymbol + formattedValue + ',' + decimalPart;

		return formattedValue;
	}

	return (
		<ContainerForm>
			<ContainerInput>
				<Title>
					Preencha os dados da melhor forma possível para encontrar mais rápido
					seu dev!
				</Title>
			</ContainerInput>
			<ContainerInput>
				<Label className='required' htmlFor='title'>
					Título da vaga
				</Label>
				<Input
					value={titulo}
					onChange={e => setTitulo(e.target.value)}
					placeholder='Digite o título da vaga'
					type='text'
					id='title'
				/>
				<Span>O título é o mais importante, seja claro e objetivo.</Span>
			</ContainerInput>
			<ContainerInput>
				<Label className='required' htmlFor='senioridade'>
					Senioridade
				</Label>
				<InputCheck
					value={senioridade}
					onChange={e => setSenioridade(e.target.value)}
					name='senioridade'
					id='senioridade'>
					<option value='Estagiário'>Estagiário</option>
					<option value='Júnior'>Júnior</option>
					<option value='Pleno'>Pleno</option>
					<option value='Sênior'>Sênior</option>
				</InputCheck>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='tipo'>Tipo</Label>
				<InputCheck
					value={type}
					onChange={e => setType(e.target.value)}
					name='tipo'
					id='tipo'>
					<option value='Tempo Integral'>Tempo Integral</option>
					<option value='Meio periodo'>Meio periodo</option>
				</InputCheck>
			</ContainerInput>
			<ContainerInput>
				<Label className='required' htmlFor='localizacao'>
					Localização
				</Label>
				<Input
					value={location}
					onChange={e => setLocation(e.target.value)}
					placeholder='Digite a localização'
					type='text'
					id='localizacao'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='description'>Descrição da vaga:</Label>
				<TextArea
					value={description}
					onChange={e => setDescription(e.target.value)}
					placeholder='Descreva as atividades do desenvolvedor'
					id='description'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label className='required' htmlFor='empresa'>
					Empresa contratante
				</Label>
				<Input
					value={empresa}
					onChange={e => setEmpresa(e.target.value)}
					placeholder='Digite a empresa que vai contratar'
					type='text'
					id='empresa'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='salario'>Salário oferecido</Label>
				<Input
					style={{
						width: '100%',
						padding: '0.3rem 4px',
						borderColor: 'rgba(0, 0, 0, 0.2)',
						borderRadius: '4px',
						backgroundColor: '#f8f8ff',
					}}
					value={remuneracao}
					onChange={e => setRemuneracao(e.target.value)}
					placeholder='Digite o salário da vaga'
					type='text'
					id='salario'
					onKeyDown={handleKeyDown}
				/>
			</ContainerInput>

			<ContainerInput>
				<Label htmlFor='horas'>Horário</Label>
				<Input
					value={hour}
					onChange={e => setHour(e.target.value)}
					placeholder='Digite o horário'
					type='text'
					id='horas'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label className='required' htmlFor='requisitos'>
					Requisitos
				</Label>
				<Input
					value={requisitos}
					onChange={e => setRequisitos(e.target.value)}
					placeholder='Digite os requisitos'
					type='text'
					id='requisitos'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='diferencial'>Diferencial</Label>
				<Input
					value={diferencial}
					onChange={e => setDiferencial(e.target.value)}
					placeholder='Digite os diferencial'
					type='text'
					id='diferencial'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='beneficios'>Beneficios</Label>
				<Input
					value={beneficios}
					onChange={e => setBeneficios(e.target.value)}
					placeholder='Digite os beneficios'
					type='text'
					id='beneficios'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label className='required' htmlFor='beneficios'>
					Link
				</Label>
				<Input
					value={link}
					onChange={e => setLink(e.target.value)}
					placeholder='Digite o link da vaga'
					type='text'
					id='beneficios'
				/>
			</ContainerInput>
			<Button
				onClick={() => {
					try {
						if (
							titulo === '' ||
							senioridade === '' ||
							link === '' ||
							requisitos === '' ||
							location === '' ||
							empresa === ''
						) {
							throw new Error('Preencha todos os campos');
						}
						handleCreateNewVaga();
						window.location.reload();
					} catch (err) {
						render(
							<p
								style={{
									color: '#ff0000',
									marginTop: '4px',
									fontSize: '.8rem',
								}}>
								Erro ao cadastrar usuário, preencha todos os campos
								obrigatórios.
							</p>,
							document.getElementById('textError')
						);
					}
				}}>
				Enviar
			</Button>
			<div id='textError'></div>
		</ContainerForm>
	);
}
