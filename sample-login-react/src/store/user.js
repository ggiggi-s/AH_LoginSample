import { observable, action } from 'mobx';
// import axios from 'axios';

export default class User {
  @observable username;

  @observable usernum;

  @action setUsername = (username) => {
    this.username = username;
  }
}
