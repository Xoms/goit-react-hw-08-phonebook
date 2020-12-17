import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {authOperations} from '../../../redux/auth'

import Button from '../../shared/Button';

import  '../../shared/styles/commonForm.style.scss';

const initState =  {name: '',
email: '',
password: '',}

class Register extends Component  {

  state = {
    ...initState
  }

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({
      [name] : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.registerUser({...this.state});
    this.setState({...initState});
  }

  render() {
    const {name, email, password} = this.state
    return(
        <form className="register-form form" onSubmit={this.handleSubmit}>
  
          <div className="form__group">
            <label className="form__label" htmlFor="registerName" >Name</label>
            <input className="form__input" 
              onChange={this.handleChange} 
              id="registerName"
              name="name"
              value={name}/>
          </div>
  
          <div className="form__group">
            <label className="form__label" htmlFor="registerEmail" >Email</label>
            <input className="form__input" 
              type="email"
              onChange={this.handleChange} 
              id="registerEmail"
              name="email"
              value={email}/>
          </div>
  
          <div className="form__group">
            <label className="form__label" htmlFor="registerPassword" >Password</label>
            <input className="form__input" 
              type="password"
              onChange={this.handleChange} 
              id="registerPassword"
              name="password"
              value={password}/>
          </div>
  
          <Button type="submit" className="register-form__submit-btn">Register</Button>
        </form>
  )}
};

Register.propTypes = {
  // bla: PropTypes.string,
};

Register.defaultProps = {
  // bla: 'test',
};

// const mapState = state => {

// }
const mapDispatch = {
  registerUser: authOperations.register
}
export default connect(null,mapDispatch)(Register);
