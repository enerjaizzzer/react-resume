import React, { Component } from 'react';
import './style.less';
import { AboutIcon } from '../../styles/icons/Icons';

const buttonsConfig = [
  {
    value: 'About',
    color: 'blue',
    icon: AboutIcon(),
  },
  {
    value: 'Stack',
    color: 'yellow',
    icon: AboutIcon(),
  },
  {
    value: 'Examples',
    color: 'green',
    icon: AboutIcon(),
  },
  {
    value: 'Contact',
    color: 'red',
    icon: AboutIcon(),
  },
]

class Sidebar extends Component {
  render() {
    const { changeActiveTab, activeTab } = this.props;

    return (
      <div className="sidebar">
        {buttonsConfig.map(button => (
          <button
            className={`sidebar__button sidebar__button_${button.color} 
            ${activeTab === button.value ? 'sidebar__button_active' : ''}`}
            type="button"
            onClick={() => changeActiveTab(button)}
          >
            {button.icon}
          </button>
        ))}
      </div>
    )
  }
}

export default Sidebar