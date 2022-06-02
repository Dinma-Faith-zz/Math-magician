import React, { useState } from 'react';
import './index.css';
import calculate from '../logic/calculate';
import CalcPageText from './CalcPage';

const Calculator = () => {
  const initState = {
    total: 0,
    next: '',
    operation: '',
  };
  const [state, setState] = useState(initState);

  const { total, next, operation } = state;

  const handleClicks = (event) => {
    const TargetValue = event.target.value;
    const updateState = calculate(state, TargetValue);
    setState(updateState);
  };

  return (
    <div>
      <CalcPageText />
      <div className="CalcContainer">
        <div className="displayInputs">
          <h2>
            {total}
            {' '}
            {operation}
            {' '}
            {next}
            {' '}
          </h2>
        </div>

        <div className="calcDiv">
          <button onClick={handleClicks} type="button" className="btn" value="AC">AC</button>
          <button onClick={handleClicks} type="button" className="btn" value="+/-">+/-</button>
          <button onClick={handleClicks} type="button" className="btn" value="%">%</button>
          <button onClick={handleClicks} type="button" className="btn btnoperator" value="÷">÷</button>
          <button onClick={handleClicks} type="button" className="btn" value="7">7</button>
          <button onClick={handleClicks} type="button" className="btn" value="8">8</button>
          <button onClick={handleClicks} type="button" className="btn" value="9">9</button>
          <button onClick={handleClicks} type="button" className="btn btnoperator" value="x">X</button>
          <button onClick={handleClicks} type="button" className="btn" value="4">4</button>
          <button onClick={handleClicks} type="button" className="btn" value="5">5</button>
          <button onClick={handleClicks} type="button" className="btn" value="6">6</button>
          <button onClick={handleClicks} type="button" className="btn btnoperator" value="-">-</button>
          <button onClick={handleClicks} type="button" className="btn" value="1">1</button>
          <button onClick={handleClicks} type="button" className="btn" value="2">2</button>
          <button onClick={handleClicks} type="button" className="btn" value="3">3</button>
          <button onClick={handleClicks} type="button" className="btn btnoperator" value="+">+</button>
          <button onClick={handleClicks} type="button" className="btnZero" value="0">0</button>
          <button onClick={handleClicks} type="button" className="btn" value=".">.</button>
          <button onClick={handleClicks} type="button" className="btn btnoperator" value="=">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
