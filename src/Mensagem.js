import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class Mensagem extends Component {
  exibir = (mensagem) => {
console.log(mensagem);
  }
render() {
return (
  <>
  <h1>clique no botão e veja a mensagem no  console</h1>
  <button onClick={() => {
    this.exibir("Ola mundo");
  }}>Clique Aqui</button>
  </>
);
}
}

export default Mensagem;
