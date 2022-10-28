import { Component } from 'react';
export default class Container extends Component {
    state = {show : true}
    delHeader = () => {
        this.setState({show: false})
    }
    render () {
    let h1;
    if(this.state.show) {
        h1 = <Child/>
    }
    return (<div>
        {h1}
        <button onClick={this.delHeader}>Clique aqui e vai desapercer </button>
    </div>)
    }
}
class Child extends Component {
    componentWillUnmount() {
        console.log("O componente vai ser destruido");
    }
    render() {
        return (<h1>Ola Mundo</h1>)
    }
}