import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import selectors from '../../../redux/phonebook/contacts-selectors';
import ContactsListItem from './ContactsListItem';
import  './ContactsList.scss';


const ContactsList = ({contacts, isLoading}) => {

  const loading = isLoading  && <h2>Loading...</h2>;
  
  return (
  <>
    {loading}
  <TransitionGroup component="ul" className="contacts-list">
    {contacts.map( ({id}) => {
      return (
        <CSSTransition key={id}  timeout={250} classNames="contacts-items">
          <ContactsListItem  id={id}/>
        </CSSTransition>
      )
    })}
  </TransitionGroup>
  </>
)};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  })).isRequired,
};


//////REDUX //////
const mapStateToProps = state => {
  return { 
    contacts: selectors.getVisibleContacts(state),
    isLoading: selectors.getIsLoading(state),
   }
}

export default connect(mapStateToProps)(ContactsList) ;
