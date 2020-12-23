import React, { Component } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { MenuItems, cultureMenu, rwandaMenu } from '../../components/MenuItems';
import Flag from '../../images/rwandaLogo.png';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  state = {
    toggle: false,
  };
  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <>
        <nav>
          <header>
            <Link to='/'>
              <img src={Flag} alt='Rwanda Flag' className='logo' />
            </Link>

            <ul className={toggle ? 'toggle' : ''}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <FaTimes className='close' onClick={this.menuToggle} />
            </ul>
            <FaBars className='menu' onClick={this.menuToggle} />
          </header>
        </nav>
      </>
    );
  }
}
