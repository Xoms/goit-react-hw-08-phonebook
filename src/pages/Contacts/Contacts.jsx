import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';
import Title from '../../components/shared/Title';
import Container from '../../components/shared/Container';
import PhonesForm from '../../components/ContactsModule/PhonesForm';
import ContactsList from '../../components/ContactsModule/ContactsList';
import Filter from '../../components/ContactsModule/Filter';

import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';


class Contacts extends Component {
  // без кастомного роутинга
  // componentDidMount(){
  //   this.redirectUnauthorized()
  // }

  // componentDidUpdate(){
  //   this.redirectUnauthorized()
  // }

  // redirectUnauthorized(){
  //   if(!this.props.isAuthorized){
  //     this.props.history.replace('/')
  //   }
  // }

  render(){
    return (
    <Container className="container phonebook">
          <CSSTransition in={true} 
            appear={true}
            classNames="fade" 
            unmountOnExit 
            timeout={500}
          >
            <Title title="Phonebook"/>
          </CSSTransition>

          <PhonesForm/>
          <Title title="Contacts" className="main-title"/>
          <Filter/>
          <ContactsList/>

    </Container>
  )};
}
const mapStateToProps = state => ({
  isAuthorized: authSelectors.getToken(state)
})
export default connect(mapStateToProps)(Contacts);
