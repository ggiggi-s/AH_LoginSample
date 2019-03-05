import { observable, action } from 'mobx';

export default class PageStateStore {
  @observable pageState;

  @action setState = (state) => {
    this.pageState = state;
  }
}
