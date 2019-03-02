import React, { Component } from 'react';
import Header from './components/Header';
import FirstPage from './components/FirstPage';

class App extends Component {
  render() {
    return (
      <div className="all">
        <Header />
        <div className="body">
          <FirstPage />
        </div>
      </div>
    );
  }
}

export default App;
