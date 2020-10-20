import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import formatValue from '../../utils/FormatValue';
import { TableContainer } from './styles';

interface OpportunityInterface {
  name: string;
  limit: number;
  interest: number;
  term: number;
  isActive: boolean;
}

const Opportunities: React.FC = () => {

  const [opportunities, setOpportunities] = useState<OpportunityInterface[]>([]);

  const url = window.location;
  var params = url.pathname.split(':')
  const email = params[1].replace('/','')
  const name = params[2].replace('%20','')
  

  useEffect(() => {
    async function loadOpportunities(): Promise<void> {
      const response = await api.get(`/opportunities/${email}`);
      const dados = response.data;
      const array: any[] = Object.values(dados);
      setOpportunities(array);
    }
    loadOpportunities();
  }, []);

  
  return (
    <>
      <Header />
      <TableContainer>
        <legend>Oportunidades {name}:</legend>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Limite</th>
              <th>Interesse</th>
              <th>Prazo</th>
              <th>Ativo/Inativo</th>
            </tr>
          </thead>
          {opportunities.map(opportunity => (
            <tbody key={opportunity.name}>
              <tr>
                <td>{ opportunity.name }</td>
                <td>{ formatValue(opportunity.limit) }</td>
                <td>{ opportunity.interest }</td>
                <td>{ opportunity.term }</td>
                <td>{ opportunity.isActive === true ? "Ativo" : "Inativo" }</td>
              </tr>
            </tbody>
          ))}
        </table>
      </TableContainer>
      <Footer />
    </>
  );
};

export default Opportunities;