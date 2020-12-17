import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Form.styles';

class Form extends Component{

  state  = {
    ...this.props.names
  }

  handleChange = ({target}) => {
    const {name, value} = target 
    this.setState({
      [name]:value
    })
  }

  handleSubmit = () => {
    
  }

  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
  })
  }
} 

Form.propTypes = {
  names: PropTypes.objectOf(PropTypes.string),
};

Form.defaultProps = {
  names: null,
};

export default Form;
