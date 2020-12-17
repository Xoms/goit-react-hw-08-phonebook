import React from 'react'

import withAuth from '../hoc/withAuth';

import {NavLink} from 'react-router-dom';

import  './Nav.styles.scss';

const Nav = ({isAuthorized}) => {
  
  const HomePage = <li className="navbar-item"> 
      <NavLink to='/' exact className="nav-link" activeClassName="nav-link--active"> Home </NavLink>
    </li>

  const AuthNav = isAuthorized ? 
    <li className="navbar-item"> 
      <NavLink to='/contacts' exact className="nav-link" activeClassName="nav-link--active"> Contacts </NavLink> 
    </li> 
    :
    <>
      <li className="navbar-item"> 
        <NavLink to='/register' exact className="nav-link" activeClassName="nav-link--active"> Register </NavLink> 
      </li> 
      <li className="navbar-item"> 
        <NavLink to='/login' exact className="nav-link" activeClassName="nav-link--active"> Login </NavLink> 
      </li> 
    </>

  return(
    
  <ul className="navbar">
    {HomePage}
    {AuthNav}
  </ul>
)};


export default withAuth(Nav);
