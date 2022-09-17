import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  bgColor: '#F9F8F8',
  primaryColor: '#71B48D',
  secondaryColor: '#DE9151',
  darkColor: '#3E505B',
  lightColor: '#F5F0F6',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    background-color: ${(props) => props.theme.bgColor};
  }
`;

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouteSwitch />
    </ThemeProvider>
  </React.StrictMode>
);
