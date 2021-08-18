// NAVBAR READY TO USE

import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavbarStrap = (props) => {

  return (
      <div>
        <Navbar color="primary" light expand="md">
          <Container>
            <div className="d-flex align-items-center">
              <NavbarBrand className="text-white" style={{fontSize: '24px'}}
                           href="/Coindata">CoinData</NavbarBrand>

              <NavLink className="text-white"
                       href="/Coindata/alldata">Alldata</NavLink>

            </div>
            <div>

              <Nav className="d-flex flex-row" navbar>
                <NavItem>
                  <NavLink className="text-white"
                           href="/Coindata">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white"
                           href="/Coindata/about">About</NavLink>
                </NavItem>
              </Nav>


            </div>
          </Container>
        </Navbar>
      </div>
  );
};

export default NavbarStrap;

// NAVBAR READY TO USE