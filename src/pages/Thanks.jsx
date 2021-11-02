import React from 'react';
import { Link } from 'react-router-dom';

import { useUserPlanContext } from '../context/UserPlanContext';

import Layout from './_layout';
import ImageThanks from '../images/thanks.png';

const ThanksPage = () => {
  const { userPlan } = useUserPlanContext();

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
            La suma asegurada escogida es de:{' '}
            <strong>
              ${userPlan?.monthlyCoverages?.insuredAmount.toFixed(2)}
            </strong>{' '}
            <br />
            Con un monto mensual a pagar de:{' '}
            <strong>
              ${userPlan?.monthlyCoverages?.monthlyAmount.toFixed(2)}
            </strong>
          </p>

          <p className="description">
            Enviaremos la confirmación de compra de tu Plan Vehicular Tracking a
            tu correo:
            <br />
            <a
              href={`mailto:${userPlan?.email}`}
              target="_blank"
              rel="noreferrer"
            >
              {userPlan?.email}
            </a>
          </p>

          <Link className="btn" to="#!">
            CÓMO USAR MI SEGURO
          </Link>

          <div className="copy">© 2021 RIMAC Seguros y Reaseguros.</div>
        </div>
      </div>
    </Layout>
  );
};

export default ThanksPage;
