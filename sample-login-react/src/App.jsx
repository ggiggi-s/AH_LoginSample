import React, { Component } from 'react';
import Header from './components/header/Header';
// import FirstPage from './components/FirstPage';
// import SignUpPage from './components/SignUpPage';
import PageNavigation from './PageNavigation';
// import Counter from './components/Counter';
// import Default from './components/pages/Default';

class App extends Component {
  render() {
    return (
      <div className="all">
        <Header />
        <div className="body">
          {/* <Counter /> */}
          {/* <Default /> */}

          <PageNavigation />
          {/* <FirstPage />
          <SignUpPage /> */}

        </div>
      </div>
    );
  }
}

export default App;
