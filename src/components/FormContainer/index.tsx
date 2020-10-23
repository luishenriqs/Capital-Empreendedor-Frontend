/**************************************************************** */
/* Componente "FormContainer" de uso exclusivo da página "Opportunities". 
Ele exibe um formulário para a criação de uma nova oportunidade para o cliente.
Assim que o formulário é preenchido e submetido a função "handleAddOpportunity" 
dispara uma requisição "post" criando no arquivo "data-json", no backend, essa 
nova "opportunity" */
/**************************************************************** */

import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Container } from './styles';
import Logo from '../../assets/Logo2.png';

interface Opportunity {
  name: string;
  limit: number;
  interest: number;
  term: number;
  isActive: boolean;
}

const FormContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [limit, setLimit] = useState('');
  const [interest, setInterest] = useState('');
  const [term, setTerm] = useState('');
  const [isActive, setIsActive] = useState('');

  async function handleAddOpportunity(
    event: FormEvent<HTMLFormElement>
  ): Promise<Opportunity> {
    // event.preventDefault();
    const response = await api.post(`/opportunities/${email}`, {
      name: name,
      limit: limit,
      interest: interest,
      term: term,
      isActive: isActive,
    });
    const opportunity = response.data;
    setEmail('');
    setName('');
    setLimit('');
    setInterest('');
    setTerm('');
    setIsActive('');
    console.log(opportunity)
    return opportunity;
  }
  return (
    <Container>
      <form onSubmit={handleAddOpportunity}>
        <fieldset>
          <legend>Cadastre aqui um novo financiamento.</legend>
          <input
            type="input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email do cliente"
          />
          <input
            type="input"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da instituição"
          />
          <input
            id="smallInput"
            type="input"
            value={limit}
            onChange={e => setLimit(e.target.value)}
            placeholder="Limite"
          />
          <input
            id="smallInput"
            type="input"
            value={interest}
            onChange={e => setInterest(e.target.value)}
            placeholder="Interesse"
          />
          <input
            id="smallInput"
            type="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
            placeholder="Prazo"
          />
          <button type="button" onClick={() => setIsActive('true')} id="true">
            Ativo
          </button>
          <button type="button" onClick={() => setIsActive('false')} id="false">
            Inativo
          </button>

          <button type="submit">Enviar</button>
        </fieldset>
      </form>
      <img src={Logo} alt="Capital Empreendedor" />
    </Container>
  );
};

export default FormContainer;
