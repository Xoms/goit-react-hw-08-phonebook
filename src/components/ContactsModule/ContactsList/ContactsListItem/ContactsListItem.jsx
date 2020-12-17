import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import recordOperations from "../../../../redux/phonebook/contacts/recordOperations";
import selectors from '../../../../redux/phonebook/contacts-selectors';

import Button from '../../../shared/Button';
import './ContactsListItem.scss';


const ContactsListItem = ({name, number, onDelete}) => {
  return (
    <li className="contacts-list__item">
      <span className="contacts-list__item-text">{name}: {number}</span>
      <Button type="button" onClick={onDelete} className="contacts-list__item-btn">X</Button>
    </li>

)};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string, 
  number: PropTypes.string, 
  onDelete:  PropTypes.func.isRequired
};
ContactsListItem.defaultProps = {
  name: '',
  number: '',
}

const mapStateToProps = (state, ownProps) => ({
      ...selectors.getContactById(state, ownProps.id)
    })


const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(recordOperations.delContact(ownProps.id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);