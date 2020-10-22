import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/Logo2.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Capital Empreendedor" />
    </Container>
  );
};

export default Footer;
