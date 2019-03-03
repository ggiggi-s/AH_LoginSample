import React, { Component } from 'react';
import Header from './components/Header';
import FirstPage from './components/FirstPage';
// import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="all">
        <Header />
        <div className="body">
          {/* <Counter /> */}
          <FirstPage />

        </div>
      </div>
    );
  }
}

export default App;
