import React from 'react';
import { inject, observer } from 'mobx-react';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import Default from './components/pages/Default';


function PageNavigation(props) {
  const { pageState } = props;
  let page;
  switch (pageState) {
    case 'LOGIN': page = <LoginPage />; break;
    case 'SIGNUP': page = <SignUpPage />; break;
    case 'DEFAULT': page = <Default />; break;

    default: page = <Default />; break;
  }
  return page;
}

export default inject(({ pageNavigation }) => ({
  pageState: pageNavigation.pageState,
}))(observer(PageNavigation));
