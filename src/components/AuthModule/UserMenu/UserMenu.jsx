import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {authSelectors, authOperations} from '../../../redux/auth';
//import { Test } from './UserMenu.styles';

const CurrentUser = ({name, onLogout}) => (
  <> 
  { name &&
  <div className="current-user">
    <span className="current-user__txt">Welcome, {name}</span>
    <button type="button" className="current-user__btn-logout" onClick={() => onLogout()}>Logout</button>
  </div>
  }
  </>
);

CurrentUser.propTypes = {
  name: PropTypes.string,
};


const mapState = state => ({
  name: authSelectors.getUserName(state)
}) 


const dispatchToProps =  {
  onLogout: authOperations.logout
}
export default connect(mapState, dispatchToProps)(CurrentUser);
