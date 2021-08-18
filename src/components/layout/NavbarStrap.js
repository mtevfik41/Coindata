// NAVBAR READY TO USE

import React from 'react';
import {Link} from 'react-router-dom';
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
              <NavbarBrand style={{fontSize: '24px'}}>
                <NavLink>
                  <Link className="text-white text-decoration-none"
                        href="/Coindata">
                    <span className="hov">Coindata</span>
                  </Link>
                </NavLink>
              </NavbarBrand>
              <NavLink>
                <Link className="text-white text-decoration-none"
                      to="/Coindata/alldata">
                  <span className="hov">All data</span>
                </Link>
              </NavLink>
            </div>
            <div>
              <Nav className="d-flex flex-row" navbar>
                <NavItem>
                  <NavLink>
                    <Link className="text-white text-decoration-none"
                          to="/Coindata">
                      <span className="hov">Home</span>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link className="text-white text-decoration-none"
                          to="/Coindata/about">
                      <span className="hov">About</span>
                    </Link>
                  </NavLink>
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