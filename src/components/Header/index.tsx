import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/Logo2.png';

const Header: React.FC = ()=> (
  <Container>
    <header>
      <img src={Logo} alt="Capital Empreendedor" />
      <div>
          <>
            <h3>
              “A Capital Empreendedor é o Tinder
              do crédito que soluciona um problema
              antigo para empresários: A busca do
              MELHOR crédito para a empresa.”
            </h3>
            <h2>InfoMoney</h2>
          </>
      </div>
    </header>
  </Container>
);

export default Header;
