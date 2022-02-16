import react from 'react';

import './calculator.css';

class Calculator extends react.Component {
  constructor() {
    super();
    this.state = {
      Calc: ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+',
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="display-screen">0</div>
        <div className="num-rows">
          {this.state.Calc.map((item) => (
            <div className="butn" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="bottom-row">
          <div className="butn">0</div>
          <div className="butn">.</div>
          <div className="butn-equals">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
