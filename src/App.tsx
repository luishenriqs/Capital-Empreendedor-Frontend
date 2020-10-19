import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyle from './styles/global';

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
)

export default App;
