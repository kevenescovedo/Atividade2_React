import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class Header extends Component {
 state = {
  
 }
/*static getDerivedStateFromProps(props,state) {
  console.log(new Date().getTime());
  return {corfavorita: props.favcol }
}*/
render() {
  console.log(new Date().getTime());
return (
  <header>
  <h1>Minha Cor favorita é {this.state.corfavorita}</h1>
  </header>
);
}
componentDidMount() {
  console.log(new Date().getTime());
  setTimeout(()=>{
    console.log("3 segundos");
  this.setState({corfavorita: "Verde"})
  },3000)
}
}

export default Header;
