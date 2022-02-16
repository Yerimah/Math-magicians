import react from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends react.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.evntHandler = this.evntHandler.bind(this);
  }

    evntHandler = (e) => {
      if (!e.target.name) return;

      const { next, total, operation } = calculate(this.state, e.target.name);

      if (next === null && total === null) {
        this.setState({ next, total: '0', operation });
      } else {
        this.setState({ next, total, operation });
      }
    };

    render() {
      const { total, next } = this.state;
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
                onClick={(e) => this.evntHandler(e)}
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
    }
}

export default Calculator;
