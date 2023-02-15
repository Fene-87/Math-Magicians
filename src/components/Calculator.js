import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [details, setDetails] = useState({ total: '0', next: null, operation: null });

  const { total, next, operation } = details;

  const makeCalculation = (btn) => {
    setDetails((details) => calculate(details, btn.target.textContent));
  };

  return (
    <section className="calculator-section">
      <div className="answer-section">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>

      <div className="buttons-section">
        <span className="button" onClick={makeCalculation}>AC</span>
        <span className="button" onClick={makeCalculation}>+/-</span>
        <span className="button" onClick={makeCalculation}>%</span>
        <span className="button operator" onClick={makeCalculation}>/</span>
        <span className="button" onClick={makeCalculation}>7</span>
        <span className="button" onClick={makeCalculation}>8</span>
        <span className="button" onClick={makeCalculation}>9</span>
        <span className="button operator" onClick={makeCalculation}>x</span>
        <span className="button" onClick={makeCalculation}>4</span>
        <span className="button" onClick={makeCalculation}>5</span>
        <span className="button" onClick={makeCalculation}>6</span>
        <span className="button operator" onClick={makeCalculation}>-</span>
        <span className="button" onClick={makeCalculation}>1</span>
        <span className="button" onClick={makeCalculation}>2</span>
        <span className="button" onClick={makeCalculation}>3</span>
        <span className="button operator" onClick={makeCalculation}>+</span>
        <span className="button item17" onClick={makeCalculation}>0</span>
        <span className="button" onClick={makeCalculation}>.</span>
        <span className="button operator" onClick={makeCalculation}>=</span>
      </div>
    </section>
  );
};

export default Calculator;
