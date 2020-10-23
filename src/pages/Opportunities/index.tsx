/**************************************************************** */
/* A página "Opportunities" é chamada quando um botão, na coluna da esquerda com 
os nomes dos clientes na "Dashboard" é clicado. Ao se realizar essa ação é 
disparada uma requisição que busca no arquivo "data-json", no backend, os dados
das oportunidades do cliente específico alvo do click.
Essa página, "Opportunities", exibe os campos "Nome", "Limite", "Interesse", 
"Prazo", "Ativo/Inativo" e "Deletar".
A coluna "Ativo/Inativo" é composta por um botão que permite editar o 'status' 
da oportunidade. Ao ser acionado ele faz uma requisição 'Put' e altera o 
respectivo campo no arquivo que simula o banco de dados. Imediatamente a 
aplicação é renderizada exibindo o novo 'status'. 
Por fim, na coluna da direita há um botão para deletar a oportunidade. Para que 
isso ocorra, o botão dispara uma nova requisição para o backend, em seguida 
a página é atualizada. 
A página também conta com dois componentes. Um "Header" com um link exclusivo de
"Voltar" que a direciona novamente para a "Dashboard", e um "FormContainer" 
que exibe um formulário para criação de novas oportunidades. */
/**************************************************************** */

import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header/index';
import FormContainer from '../../components/FormContainer';
import formatValue from '../../utils/FormatValue';
import { Container } from './styles';

interface OpportunityInterface {
  name: string;
  limit: number;
  interest: number;
  term: number;
  isActive: boolean;
}

const Opportunities: React.FC = () => {

  const [opportunities, setOpportunities] = useState<OpportunityInterface[]>([]);
  const [resp, setResp] = useState([])

  const url = window.location;
  var params = url.pathname.split(':')
  const email = params[1].replace('/','')
  const name = params[2].replace('%20','')
  
  /**************************************************************** */
  /* O useEffect permite que a aplicação seja renderizada a cada nova chamada e
  sempre que houver uma alteração no status da oportunidade. */

  useEffect(() => {
    const loadOpportunities = async (): Promise<void> => {
      const response = await api.get(`/opportunities/${email}`);
      const dados = response.data;
      const array: any[] = Object.values(dados);
      setOpportunities(array);
    }
    loadOpportunities();
  }, [resp]);
  /**************************************************************** */
  
  /**************************************************************** */
  // Requisição "put" que altera o 'status' da oportunidade do cliente.

  async function handleChangeStatus(name: string, status: boolean): Promise<void> {
    const response = await api.put(`/opportunities/${email}`, {
      name: name,
      newStatus: status
    })
    setResp(response.data);
  }
  /**************************************************************** */

  /**************************************************************** */
  // Requisição "delete" chamada pelo botão "Deletar" na página "Opportunities".

  async function handleDelete(name: string): Promise<void> {
    const response = await api.delete(`/opportunities/${email}/${name}`)
    setResp(response.data);
  }
  /**************************************************************** */

  return (
    <>
      <Header 
        backText="Voltar"
      />
      <Container>
        <legend>Oportunidades {name}:</legend>
        <form>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Limite</th>
                <th>Interesse</th>
                <th>Prazo</th>
                <th>Ativo/Inativo</th>
                <th>Deletar</th>
              </tr>
            </thead>
          </table>
          {opportunities.map(opportunity => { 

            const name = opportunity.name;
            const status = opportunity.isActive === true ? false : true;
            const isActive = opportunity.isActive === true ? "Ativo" : "Inativo";
            
            return (
              <section key={opportunity.name}>
                <div>
                  <span>{ opportunity.name }</span>
                  <span>{ formatValue(opportunity.limit) }</span>
                  <span>{ opportunity.interest }</span>
                  <span>{ opportunity.term }</span>
                  <button
                    type="button"
                    onClick={() => {handleChangeStatus(name, status)}}
                    className={isActive}
                  >
                    {isActive}
                  </button>
                  <button
                    type="button"
                    onClick={() => {handleDelete(name)}}
                    className="delete"
                  >
                    Deletar
                  </button>
                </div>
              </section>
            )
          })}
        </form>
      </Container>
      <FormContainer />
    </>
  );
};

export default Opportunities;