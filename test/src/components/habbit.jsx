import React, { Component } from 'react';

class Habbit extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    // state오브젝트 안에 있는 count를 증가시킨 뒤 state를 업데이트 해야함.
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    // state오브젝트 안에 있는 count를 감소시킨 뒤 state를 업데이트 해야함.
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  }

  render() {
    return (
      <li className="habbit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className='habit-button habit-delete'>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Habbit;