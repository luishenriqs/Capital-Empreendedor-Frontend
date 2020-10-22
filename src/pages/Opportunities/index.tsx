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
  
  useEffect(() => {
    const loadOpportunities = async (): Promise<void> => {
      const response = await api.get(`/opportunities/${email}`);
      const dados = response.data;
      const array: any[] = Object.values(dados);
      setOpportunities(array);
    }
    loadOpportunities();
  }, [resp]);
  
  async function handleChangeStatus(name: string, status: boolean): Promise<void> {
    const response = await api.put(`/opportunities/${email}`, {
      name: name,
      newStatus: status
    })
    setResp(response.data);
  }

  async function handleDelete(name: string): Promise<void> {
    const response = await api.delete(`/opportunities/${email}/${name}`)
    setResp(response.data);
  }

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