import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getToken} from '../../redux/auth/authSelectors';

import Nav from '../Nav';
import UserMenu from '../AuthModule/UserMenu';

const AppBar = ({isAuthorized}) => (
  <div className="header-container">
    <Nav />
    {isAuthorized && <UserMenu/> }
</div>
);

AppBar.propTypes = {
  isAuthorized: PropTypes.string

};
AppBar.defaultProps = {
  isAuthorized: null
}


const mapState = (state) => ({
  isAuthorized: getToken(state)
})

export default connect(mapState)(AppBar);
