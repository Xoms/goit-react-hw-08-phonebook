import React, { Component, Suspense, lazy}  from 'react';
import { Route, Switch, /*Redirect*/ } from 'react-router-dom';
import routes from './routes';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import {connect} from 'react-redux';
import recordOperations from './redux/phonebook/contacts/recordOperations';
import {authOperations} from './redux/auth'

import Layout from './components/shared/Layout'; 
import Loader from './components/shared/Loader';



import './App.scss';


class App extends Component {   

  componentDidMount() {
    this.props.getCurrentUser();
  }


  render(){

    const routesMap = routes.map(route => {
      return route.privated ? <PrivateRoute key={route.label} {...route}/> : <PublicRoute key={route.label} {...route} />
      })

    return (
      <Layout>
        <Suspense fallback={<Loader/>}>
          <Switch>
            {routesMap}
             <Route component={lazy( () => import("./pages/NotFound") )} />
          </Switch>
        </Suspense>
      </Layout>

      
    );  
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
  onGetContacts: recordOperations.getContacts,
}
export default connect(null, mapDispatchToProps)(App);
