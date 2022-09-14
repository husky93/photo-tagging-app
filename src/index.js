import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  bgColor: '#FEF5EF',
  primaryColor: '#C1292E',
  secondaryColor: '#235789',
  tertiaryColor: '#E4BB97',
  lightColor: '#D6E3F8',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${(props) => props.theme.bgColor};
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouteSwitch />
    </ThemeProvider>
  </React.StrictMode>
);
