import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const evntHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(state, e.target.name);

    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  const btns = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const { total, next } = state;

  return (
    <div className="container">
      {next ? (
        <div className="display-screen">{next}</div>
      ) : (
        <div className="display-screen">{total}</div>
      )}
      <div className="num-rows">
        {btns.map((btnName) => (
          <button
            onClick={evntHandler}
            name={btnName}
            type="button"
            className={`butn ${btnName === '0' ? 'butn-zero' : ''} ${
              btnName === '=' ? 'butn-equals' : ''
            }`}
            key={btnName}
          >
            {btnName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
