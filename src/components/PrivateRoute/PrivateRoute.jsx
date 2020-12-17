import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import withAuth from '../hoc/withAuth'


const PrivateRoute = ({component: Component,  isAuthorized, ...rest}) => (
  <Route {...rest} render={(props =>  isAuthorized ? <Component {...props}/> : <Redirect to='/login' />  )} />
);



export default withAuth(PrivateRoute);
