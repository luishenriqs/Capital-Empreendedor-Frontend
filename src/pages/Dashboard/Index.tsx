import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import formatValue from '../../utils/FormatValue';
import { TableContainer } from './styles';

interface UserInterface {
  name: string;
  email: string;
  isActive: boolean;
  phone: number;
  revenue: number;
  agreedTerms: boolean;
}

const Dashboard: React.FC = () => {
  const [allUsers, setAllUsers] = useState<UserInterface[]>([]);
  
  useEffect(() => {
    async function loadAll(): Promise<void> {
      const response = await api.get('/users');
      const dados = response.data;
      const array: any[] = Object.values(dados);
       setAllUsers(array);
    }
    
    loadAll();
  }, []);

  return (
    <>
      <Header />
      <TableContainer>
        <legend>Nossos clientes:</legend>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ativo/Inativo</th>
              <th>Contato</th>
              <th>Receita</th>
              <th>Aceite</th>
            </tr>
          </thead>
          {allUsers.map(user => (
            <tbody key={user.name}>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{ user.isActive === true ? "Ativo" : "Inativo" }</td>
                <td>{user.phone}</td>
                <td>{formatValue(user.revenue)}</td>
                <td>{ 
                  user.agreedTerms === true ? "Termos Acordados" : "Sem Acordo"
                }</td>
              </tr>
            </tbody>
          ))}
        </table>
      </TableContainer>
      <Footer />
    </>
  );
};

export default Dashboard;