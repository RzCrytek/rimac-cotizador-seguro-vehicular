import React, { useEffect, useState } from 'react';

import './Counter.scss';

import IcoMenos from '../../images/icons/menos.svg';
import IcoMas from '../../images/icons/mas.svg';

const Counter = ({
  min,
  max,
  insuredAmount,
  setInsuredAmount,
  setExceeded,
}) => {
  // const [amount, setAmount] = useState(14300);

  useEffect(() => {
    setExceeded(insuredAmount > 16000);
  }, [insuredAmount, setExceeded]);

  const decrease = () => {
    if (insuredAmount > min) {
      setInsuredAmount((prev) => prev - 100);
    }
  };

  const increase = () => {
    if (insuredAmount < max) {
      setInsuredAmount((prev) => prev + 100);
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
          value={`$${insuredAmount}`}
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
