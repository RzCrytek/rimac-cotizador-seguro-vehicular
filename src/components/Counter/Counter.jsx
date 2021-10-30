import React from 'react';

import './Counter.scss';

import IcoMenos from '../../images/icons/menos.svg';
import IcoMas from '../../images/icons/mas.svg';

const Counter = () => {
  return (
    <div id="counter">
      <div className="note">
        <p className="text">Indica la suma asegurada</p>
        <p className="price">
          MIN $12,500 <span className="pipe">|</span> MAX $16,500
        </p>
      </div>

      <div className="counter-box">
        <button className="decrease" type="button">
          <img src={IcoMenos} alt="Menos" />
        </button>
        <input
          className="quantity"
          type="text"
          value="$ 14,300"
          readOnly
          disabled
        />
        <button className="increase" type="button">
          <img src={IcoMas} alt="Más" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
