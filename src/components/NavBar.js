import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = (props) => {
  const { user, setUserInfo } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.removeItem('user');
    setUserInfo(null);
  }

  return (
    <div className='nav'>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Pokemon Card App!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/cards">All Cards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team">Our Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact Us</NavLink>
            </NavItem>
            {!user && 
              <NavItem>
                <NavLink href="login">Login</NavLink>
              </NavItem>
            }
            {!user &&
              <NavItem>
                <NavLink href="signup">Sign Up</NavLink>
              </NavItem>
            }
            {user &&
              <NavItem>
                <NavLink href="logout" onClick={logout}>Logout</NavLink>
              </NavItem>
            }
            {user &&
              <NavItem>
                <NavLink href="collection">Your Collection</NavLink>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;