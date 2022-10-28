import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Mensagem from './Mensagem';
import Header from './Header';
import Container from './Container';
import Relogio from './Relogio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
   <Header favcol='Amarelo'/>
      <Mensagem/>
      <Container/>
      <Relogio timei={new Date().toTimeString()}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
