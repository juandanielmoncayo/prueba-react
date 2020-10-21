import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Children extends Component {
  constructor(props){
    super(props);
      this.state={
        inputValue:this.props.inputValue
      };

  }
  componentWillReceiveProps(nextProps){
    if (nextProps.inputValue != this.state.inputValue) {
      this.setState({inputValue:nextProps.inputValue});
    }
  }
  escribeHola(){
    this.setState({inputValue:"Hola, desde papá"});
  }
  render(){
    return(
      <div>
        <input
          value ={this.state.inputValue}
          onChange= {(e)=>{this.setState({inputValue: e.target.value})}}
        />
        <button onClick={(e)=>{this.props.muestraAlert(e,100)}}>
          Boton Hijo
        </button>
      </div>
    );
  }
}
Children.propTypes={
  inputValue: PropTypes.string,
  muestraAlert: PropTypes.func
}

export default Children;
