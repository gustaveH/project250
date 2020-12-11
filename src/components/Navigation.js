import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { MenuItems, cultureMenu, rwandaMenu } from './MenuItems';
import Flag from '../images/rwandaLogo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  // state = {
  //   isOpen: false,
  // };
  // handleClick = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };
  render() {
    return (
      <>
        <Navbar
          fixed='top'
          collapseOnSelect
          expand='lg'
          variant='dark'
          className='navbar'
        >
          <Link to='/'>
            <img src={Flag} alt='Rwanda Flag' className='navbar-logo' />
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto nav-links'>
              <Nav.Link href='/About'>About</Nav.Link>
              <NavDropdown title='Rwanda' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  {rwandaMenu.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className={item.cName} href={item.url}>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Culture' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  {cultureMenu.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className={item.cName} href={item.url}>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/Genocide'>Genocide</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
