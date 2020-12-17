import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {authOperations} from '../../../redux/auth'

import Button from '../../shared/Button';

import  '../../shared/styles/commonForm.style.scss';

const initState = {email: '', password: ''}
class Login extends Component{

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

    this.props.onLogin({...this.state});
    this.setState({...initState});
  }

  render() {
    const {email, password} = this.state
    return(
        <form className="register-form form" onSubmit={this.handleSubmit}>
  
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
  
          <Button type="submit" className="register-form__submit-btn">Login</Button>
        </form>
  )}
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatch = {
  onLogin: authOperations.login
}

export default connect(null,mapDispatch)(Login);
