import { Component } from "react";

export default class Relogio extends Component {
    state = {time: ''}
    // chamadao quando o componente inicia e no começo não tem estado e quando o componente muda
    //getDerivedStateFromProps é invocado logo antes de chamar o método de renderização, tanto na montagem inicial quanto 
    //nas atualizações subsequentes. Deve retornar um objeto para atualizar o estado ou null para não atualizar nada.

    /*static getDerivedStateFromProps(props,state) {
        console.log("propppppppppps");
          console.log(new Date().getTime());
        return {time: props.timei};
      }*/

      //getSnapshotBeforeUpdate() é invocado logo antes da saída renderizada mais recente ser confirmada, por exemplo. 
      //o DOM. Ele permite que seu componente capture algumas informações do DOM (por exemplo, posição de rolagem) antes que ele seja potencialmente alterado. Qualquer valor retornado por este método de ciclo de vida será passado como parâmetro 
      //para componentDidUpdate().
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('GET SNAPSHOT BEFORE UPDATE');
        console.log(prevState);
        console.log(this.state);
      }
      //se shouldComponentUpdate() para informar ao React se a saída de
      // um componente não é afetada pela mudança atual no estado ou props. O comportamento padrão é renderizar novamente a cada mudança de estado 
      //e, na grande maioria dos casos, você deve confiar no comportamento padrão.
        shouldComponentUpdate(nextProps, nextState)  {
           console.log('SHOULD COMPONENT UPDATE')
            console.log(nextState);
            console.log(this.state);
        } 

//shouldComponentUpdate() é invocado antes da renderização quando novas 
//props ou estados estão sendo recebidos. O padrão é verdadeiro. Este método não é chamado para a renderização inicial ou quando forceUpdate() é usado.
     
      componentDidUpdate() {
        console.log(new Date().getTime());

        console.log("um segundo passou");
      }
    render ( ) {
        setInterval(() => {
            this.setState({time: new Date().toTimeString() })
          }, 1000);
        console.log("loooog");
       
        let {time} = this.state;
      return (<h1>{time}</h1>)
    }
}