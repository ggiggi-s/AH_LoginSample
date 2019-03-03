/* eslint-disable */
import { observable, action } from 'mobx';
import axios from 'axios';

export default class CounterStore {
  @observable number = 0;

  @action increase = () => {
    this.number += 1;
  }

  @action decrease = () => {
    // this.number -= 1;
    axios.get('http://localhost:8080/test')
      .then((response) => {
        this.number = response.data;
      })
      .catch((response) => {
        console.log(response);
        this.number = 0;
      });
  }
}
