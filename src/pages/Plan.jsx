import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useUserPlanContext } from '../context/UserPlanContext';

import Layout from './_layout';
import { Counter, Coverages } from '../components';

import IcoBack from '../images/icons/back.svg';
import ImagePerson from '../images/person.png';

const initialCoverages = {
  tire: {
    status: false,
    amount: 15,
  },
  crash: {
    status: false,
    amount: 20,
  },
  hitRun: {
    status: false,
    amount: 50,
  },
};

const PlanPage = () => {
  const { userPlan, setUserPlan } = useUserPlanContext();

  const [insuredAmount, setInsuredAmount] = useState(14300);
  const [monthlyAmount, setMonthlyAmount] = useState(20);
  const [exceeded, setExceeded] = useState(false);
  const [coverages, setCoverages] = useState(initialCoverages);

  const handleWant = () => {
    const monthlyCoverages = {
      coverages: coverages,
      insuredAmount,
      monthlyAmount,
    };
    setUserPlan({ ...userPlan, monthlyCoverages });
  };

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
              ¡Hola, <span className="c-red">{userPlan?.name}!</span>
            </h1>

            <p className="info">Conoce las coberturas para tu plan</p>

            <div className="card-data">
              <div className="card-data-information">
                <div className="car-info">
                  <div className="plate-brand">
                    <div className="plate-brand-content">
                      <p className="plate">Placa: {userPlan?.placa}</p>
                      <h3 className="brand">Wolkswagen 2019 Golf</h3>
                    </div>
                  </div>

                  <picture>
                    <img src={ImagePerson} alt="Persona" />
                  </picture>
                </div>

                <Counter
                  min={12500}
                  max={16500}
                  insuredAmount={insuredAmount}
                  setInsuredAmount={setInsuredAmount}
                  setExceeded={setExceeded}
                />
              </div>

              <div className="card-data-amount">
                <p className="text-mount">MONTO</p>

                <h2 className="price">
                  ${monthlyAmount.toFixed(2)} <span>mensuales</span>
                </h2>

                <p className="text-includes">El precio incluye:</p>

                <ul>
                  <li>Llanta de respuesto</li>
                  <li>Analisis de motor</li>
                  <li>Aros gratis</li>
                </ul>

                <button className="btn" type="button" onClick={handleWant}>
                  LO QUIERO
                </button>
              </div>
            </div>

            <Coverages
              coverages={coverages}
              setCoverages={setCoverages}
              setMonthlyAmount={setMonthlyAmount}
              exceeded={exceeded}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlanPage;
