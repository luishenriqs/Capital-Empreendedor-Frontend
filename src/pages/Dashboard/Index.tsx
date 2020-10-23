/**************************************************************** */
/* A Dashboard é a página principal desta aplicação, logo ao ser carregada ela
exibe a listagem de todos os clientes e suas respectivas informações. Isso é 
realizado pela função loadAll chamada pelo useEffect.
No campo de listagem de clientes, a coluna da esquerda com o nome dos clientes 
é um botão, que ao ser clicado nos direciona para a página "Opportunities" que 
exibe as oportunidades do cliente alvo desse click.
Além da listagem de clientes a página Dashboard conta com dois componentes, um 
Header personalizado com um comentário sobre a empresa "Capital Empreendedor" 
feito pela "InfoMoney", e um Footer.  */
/**************************************************************** */

import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import formatValue from '../../utils/FormatValue';
import { Container } from './styles';
import { Link } from 'react-router-dom';

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

/**************************************************************** */
/* O "useEffect" permite que a aplicação exiba a listagem de clientes assim que
a página é carregada, pois dispara a requisição "Get" que busca as informações 
do cliente no arquivo "data-json" */

  useEffect(() => {
    async function loadAll(): Promise<void> {
      const response = await api.get('/users');
      const dados = response.data;
      const array: any[] = Object.values(dados);
       setAllUsers(array);
    }
    loadAll();
  }, []);
  /**************************************************************** */

  return (
    <>
      <Header 
      comment="“A Capital Empreendedor é o Tinder do crédito que soluciona um 
        problema antigo para empresários: A busca do MELHOR crédito para a empresa.”"
      signature="InfoMoney"
      />
      <Container>
        <legend>Nossos clientes:</legend>
        <form>
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
          </table>
          {allUsers.map(user => (
            <section key={user.name}>
              <div>
                <Link to={`/opportunities/:${user.email}/:${user.name}`}>
                  <button 
                    type="button" >
                      {user.name}
                  </button>
                </Link>
                <span>{user.email}</span>
                <span>{ user.isActive === true ? "Ativo" : "Inativo" }</span>
                <span>{user.phone}</span>
                <span>{formatValue(user.revenue)}</span>
                <span>{ 
                  user.agreedTerms === true ? "Termos Acordados" : "Sem Acordo"
                }</span>
              </div>
            </section>
          ))}
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;