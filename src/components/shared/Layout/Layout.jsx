import React from 'react';
import Nav from "../../Nav";
import UserMenu from "../../AuthModule/UserMenu";
import Container from "../Container";
import './Layout.styles.scss';

const Layout = ({children}) => (
  <> 
    <header>
      <Container>
        <div className="header-container">
          <Nav />
          <UserMenu />
        </div>
      </Container>
    </header>

    <main>
      {children}
    </main>

    <footer className="footer">
      <Container>
        <div className="footer-content">
          <p>Phonebook by Oleg Shablii</p>
        </div>   
      </Container>
    </footer>
  </>
);

export default Layout;
