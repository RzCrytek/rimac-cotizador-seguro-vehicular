import React from 'react';

import Header from '../components/Header/Header';

import ImageCartGirl from '../images/home-information-cart-girl.svg';

const HomePage = () => {
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

            <form action="">
              <div className="form-group form-document">
                <select
                  className="form-select"
                  name="document_type"
                  defaultValue="DNI"
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                </select>

                <input
                  className="form-control"
                  type="text"
                  name="document_number"
                  placeholder="Nro. de doc"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  placeholder="Celular"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="placa"
                  placeholder="Placa"
                  required
                />
              </div>

              <div className="form-check">
                <input id="term" type="checkbox" name="terms" />
                <label htmlFor="term">
                  <span>
                    Acepto la{' '}
                    <a href="#!" target="_blank" rel="noreferrer">
                      Política de Protección de Datos Personales
                    </a>{' '}
                    y los{' '}
                    <a href="#!" target="_blank" rel="noreferrer">
                      Términos y Condiciones
                    </a>
                    .
                  </span>
                </label>
              </div>

              <button className="btn">COTÍZALO</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
