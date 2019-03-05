
import { inject, observer } from 'mobx-react';


function HeaderNavigation(props) {
  const { username } = props;
  if (username == null) return '로그인하세요';
  return username;
}

export default inject(({ user }) => ({
  pageState: user.username,
}))(observer(HeaderNavigation));
