import React from 'react';

import './Toppings.scss';

import IconLlanta from '../../images/icons/llanta.svg';
import IconChoque from '../../images/icons/choque.svg';
import IconAtropello from '../../images/icons/atropello.svg';

const Toppings = () => {
  return (
    <div id="toppings">
      <h3>Agrega o quita coberturas</h3>

      <div className="header">
        <div className="item active">
          PROTEGE A<br />
          TU AUTO
        </div>
        <div className="item">
          PROTEGE A LOS
          <br />
          QUE TE RODEAN
        </div>
        <div className="item">
          MEJORA TU
          <br />
          PLAN
        </div>
      </div>

      <div className="accordion-box">
        <div className="accordion active">
          <div className="accordion-header">
            <div className="icon">
              <img src={IconLlanta} alt="Llanta" />
            </div>

            <div className="header-title">
              <p className="title">Llanta robada</p>
              <button className="option remove-coverage">
                <i className="ico ico-remove"></i>
                QUITAR
              </button>
            </div>
          </div>

          <div className="accordion-body">
            <p>
              He salido de casa a las cuatro menos cinco para ir a la academia
              de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
              bici, na llego a la academia que está en el centro del pueblo en
              una plaza medio-grande y dejo donde siempre la bici atada con una
              pitón a un sitio de esos de poner las bicis y mucho más
            </p>
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-header">
            <div className="icon">
              <img src={IconChoque} alt="Llanta" />
            </div>

            <div className="header-title">
              <p className="title">Choque y/o pasarte la luz roja</p>
              <button className="option add-coverage">
                <i className="ico ico-add"></i>
                AGREGAR
              </button>
            </div>
          </div>

          <div className="accordion-body"></div>
        </div>

        <div className="accordion">
          <div className="accordion-header">
            <div className="icon">
              <img src={IconAtropello} alt="Llanta" />
            </div>

            <div className="header-title">
              <p className="title">Atropello en la vía Evitamiento </p>
              <button className="option">
                <i className="ico ico-add"></i>
                AGREGAR
              </button>
            </div>
          </div>

          <div className="accordion-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Toppings;
