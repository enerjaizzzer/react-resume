import React, { Component } from 'react';
import './style.less';

class Header extends Component {
  render() {
    const { mainColor } = this.props;
    return (
      <header className="header">
        <h1 className={`header__tittle header__tittle_${mainColor}`}>
          Aleksandr Liakhovets
        </h1>
      </header>
    )
  }
}

export default Header