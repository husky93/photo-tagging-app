import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  bgColor: '#F9F8F8',
  primaryColor: '#DE9151',
  secondaryColor: '#71B48D',
  darkColor: '#3E505B',
  lightColor: '#F5F0F6',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    color: ${(props) => props.theme.darkColor};
    margin: 0;
    background-color: ${(props) => props.theme.bgColor};
    font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  section {
    flex:1 ;
  }
`;

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouteSwitch firebaseApp={app} />
    </ThemeProvider>
  </React.StrictMode>
);
