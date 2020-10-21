import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Children from './components/Children'

class App extends Component{
  constructor(){
    super();
    this.state={
      inpuChildValue:"10"
    }
    this.comunicaHijo=this.comunicaHijo.bind(this);
  }
  comunicaHijo(e){
    //this.refs.children.escribeHola();
    //this.setState({inpuChildValue:"20"});
    //commo propiedad
    this.setState({inpuChildValue:"20"});
  }
  muestraAlert(e, number){
    alert(e, number)
  }
  render(){
    return (
      <div>
        <button onClick={this.comunicaHijo}> comunica al hijo</button>
        <Children
          ref="children"
          //inputValue="10"
          inputValue={this.state.inpuChildValue}
          muestraAlert={this.muestraAlert}
        />
      </div>
    );
  }

}

export default App;
