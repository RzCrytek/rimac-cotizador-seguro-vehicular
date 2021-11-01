import React, { useEffect, useState } from 'react';

import { Header } from '../components';
import FormPersonData from '../components/FormPersonData/FormPersonData';
import useFetchUsers from '../hooks/useFetchUsers';

import ImageCartGirl from '../images/home-information-cart-girl.svg';

const HomePage = () => {
  const users = useFetchUsers('https://jsonplaceholder.typicode.com/users');
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(users[0]);
  }, [users]);

  const getData = () => {
    const randomNumber = Math.round(Math.random() * 9);
    setUser(users[randomNumber]);
  };

  return (
    <div id="wrapper">
      <Header home />
      <main id="home">
        <section className="col information">
          <div className="information-content">
            <picture>
              <img src={ImageCartGirl} alt="Carro y una chica" />
            </picture>

            <p className="sub-title">¡NUEVO!</p>
            <h1>
              Seguro <span className="c-red">Vehicular Tracking</span>
            </h1>

            <p className="description">
              Cuentanos donde le haras seguimiento a tu seguro
            </p>

            <div className="copy">© 2021 RIMAC Seguros y Reaseguros.</div>
          </div>
        </section>

        <section className="col data">
          <div className="data-content">
            <h2>Déjanos tus datos</h2>
            <button className="btn-data" onClick={getData}>
              Obtener otros datos
            </button>

            <FormPersonData user={user} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
