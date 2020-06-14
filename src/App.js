import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.less';

class App extends Component {
  state = {
    activeTab: 'About',
    mainColor: 'blue'
  }

  changeActiveTab = (item) => {
    this.setState({
      activeTab: item.value,
      mainColor: item.color,
    })
  }

  render() {
    const { activeTab, mainColor } = this.state;
    return (
      <div className="resume">
        <Header
          mainColor={mainColor}
        />
        <Sidebar
          activeTab={activeTab}
          mainColor={mainColor}
          changeActiveTab={this.changeActiveTab}
        />
      </div>
    );
  }
}

export default App;
