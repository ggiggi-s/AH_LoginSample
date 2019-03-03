import React, { Component } from 'react';
// import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Button from 'react-bootstrap/Button';

@inject('counter')
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter.number}</h1>
        <Button onClick={counter.decrease}> get num </Button>
      </div>
    );
  }
}

export default Counter;
