import React, { useEffect, useState } from 'react';

import './Counter.scss';

import IcoMenos from '../../images/icons/menos.svg';
import IcoMas from '../../images/icons/mas.svg';

const Counter = ({ min, max, setExceeded }) => {
  const [amount, setAmount] = useState(14300);

  useEffect(() => {
    setExceeded(amount > 16000);
  }, [amount, setExceeded]);

  const decrease = () => {
    if (amount > min) {
      setAmount((prev) => prev - 100);
    }
  };

  const increase = () => {
    if (amount < max) {
      setAmount((prev) => prev + 100);
    }
  };

  return (
    <div id="counter">
      <div className="note">
        <p className="text">Indica la suma asegurada</p>
        <p className="price">
          MIN ${min} <span className="pipe">|</span> MAX ${max}
        </p>
      </div>

      <div className="counter-box">
        <button className="decrease" type="button" onClick={decrease}>
          <img src={IcoMenos} alt="Menos" />
        </button>
        <input
          className="quantity"
          type="text"
          value={`$${amount}`}
          readOnly
          disabled
        />
        <button className="increase" type="button" onClick={increase}>
          <img src={IcoMas} alt="Más" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
