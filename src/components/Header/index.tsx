/**************************************************************** */
/* Componente "Header" personalizável. 
Esse componente aceita três propriedades: um comentário e uma assinatura, que 
são exibidos na "Dashboard" e um link "Voltar", exibido na página "Opportunities"
que direciona a aplicação novamente para a página principal. */
/**************************************************************** */

import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
  comment?: string;
  signature?: string;
  backText?: string;
}

const Header: React.FC<HeaderProps> = (props) => (
  <Container>
    <header>
      <img src={Logo} alt="Capital Empreendedor" />
      <div className="header-content">
        <h3>{props.comment}</h3>
        <h2>{props.signature}</h2>
        <Link to={'/'}>{props.backText}</Link>
      </div>
    </header>
  </Container>
);

export default Header;
