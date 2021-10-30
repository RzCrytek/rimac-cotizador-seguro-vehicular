import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './_layout';
import { Counter, Toppings } from '../components';

import IcoBack from '../images/icons/back.svg';
import ImagePerson from '../images/person.png';

const PlanPage = () => {
  return (
    <Layout pageId="plan">
      <div className="container">
        <aside className="aside">
          <div className="aside-content">
            <ul>
              <li>
                <span className="circle">1</span>
                <span className="text">Datos</span>
              </li>

              <li className="active">
                <span className="circle">2</span>
                <span className="text">Arma tu plan</span>
              </li>
            </ul>
          </div>
        </aside>

        <div className="wrapper">
          <div className="wrapper-content">
            <div className="back">
              <img src={IcoBack} alt="Volver" />
              <Link to="/">VOLVER</Link>
            </div>

            <h1>
              ¡Hola, <span className="c-red">Juan!</span>
            </h1>

            <p className="info">Conoce las coberturas para tu plan</p>

            <div className="card-data">
              <div className="card-data-information">
                <div className="car-info">
                  <div className="plate-brand">
                    <div className="plate-brand-content">
                      <p className="plate">Placa: C2U-114</p>
                      <h3 className="brand">Wolkswagen 2019 Golf</h3>
                    </div>
                  </div>

                  <picture>
                    <img src={ImagePerson} alt="Persona" />
                  </picture>
                </div>

                <Counter />
              </div>

              <div className="card-data-amount">
                <p className="text-mount">MONTO</p>

                <h2 className="price">
                  $35.00 <span>mensuales</span>
                </h2>

                <p className="text-includes">El precio incluye:</p>

                <ul>
                  <li>Llanta de respuesto</li>
                  <li>Analisis de motor</li>
                  <li>Aros gratis</li>
                </ul>

                <button className="btn" type="button">
                  LO QUIERO
                </button>
              </div>
            </div>

            <Toppings />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlanPage;
