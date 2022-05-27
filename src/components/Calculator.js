import React from 'react';
import './index.css';
import calculate from '../logic/calculate';
import DisplayInputs from './displayInputs';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks(event) {
    const TargetValue = event.target.value;
    const updateState = calculate(this.state, TargetValue);
    this.setState(updateState);
  }

  render() {
    const { total, next, operation } = this.state;
    console.log(typeof operation);
    return (
      <div className="mainContainer">
        <DisplayInputs total={total} operation={operation} next={next} />
        <div className="calcDiv">
          <button onClick={this.handleClicks} type="button" className="btn" value="AC">AC</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="+/-">+/-</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="%">%</button>
          <button onClick={this.handleClicks} type="button" className="btn btnoperator" value="÷">÷</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="7">7</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="8">8</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="9">9</button>
          <button onClick={this.handleClicks} type="button" className="btn btnoperator" value="x">X</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="4">4</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="5">5</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="6">6</button>
          <button onClick={this.handleClicks} type="button" className="btn btnoperator" value="-">-</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="1">1</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="2">2</button>
          <button onClick={this.handleClicks} type="button" className="btn" value="3">3</button>
          <button onClick={this.handleClicks} type="button" className="btn btnoperator" value="+">+</button>
          <button onClick={this.handleClicks} type="button" className="btnZero" value="0">0</button>
          <button onClick={this.handleClicks} type="button" className="btn" value=".">.</button>
          <button onClick={this.handleClicks} type="button" className="btn btnoperator" value="=">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
