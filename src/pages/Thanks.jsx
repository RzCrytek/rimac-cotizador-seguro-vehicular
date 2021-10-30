import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './_layout';
import ImageThanks from '../images/thanks.png';

const ThanksPage = () => {
  return (
    <Layout pageId="thanks">
      <div className="container">
        <div className="image">
          <picture>
            <img src={ImageThanks} alt="Imagen de gracias" />
          </picture>
        </div>

        <div className="information">
          <h1>
            <span className="c-red">¡Te damos la bienvenida!</span>
            <br />
            Cuenta con nosotros para proteger tu vehículo
          </h1>

          <p className="description">
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
            <br />
            <a
              href="mailto:joel.sanchez@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              joel.sanchez@gmail.com
            </a>
          </p>

          <Link className="btn" to="#!">
            CÓMO USAR MI SEGURO
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ThanksPage;
