import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { useForm } from 'react-hook-form';

import { useUserPlanContext } from '../../context/UserPlanContext';

import { FormInput, FormSelect } from './Form';

const FormPersonData = ({ user }) => {
  const { setUserPlan } = useUserPlanContext();
  const history = useHistory();

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ mode: 'onChange' });

  const errorField = (field) => (errors[field] ? 'error' : '');

  useEffect(() => {
    setValue('name', user?.name);
    setValue('email', user?.email);
  }, [setValue, user]);

  const onSubmit = (data) => {
    setUserPlan(data);
    history.push('/arma-tu-plan');
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

      <div
        className={`form-group form-document ${errorField('document_number')}`}
      >
        <FormSelect
          defaultValue="DNI"
          register={{ ...register('document_type', { required: true }) }}
        />

        <FormInput
          placeholder="Nro. de doc"
          register={{
            ...register('document_number', {
              required: true,
              minLength: 8,
              maxLength: 12,
              pattern: /^[0-9]\d*$/i,
            }),
          }}
        />
      </div>

      <div className={`form-group ${errorField('name')}`}>
        <FormInput
          placeholder="Nombre"
          register={{
            ...register('name', { required: true, pattern: /^[A-Za-z\s]+$/i }),
          }}
        />
      </div>

      <div className={`form-group ${errorField('email')}`}>
        <FormInput
          placeholder="Email"
          register={{
            ...register('email', { required: true }),
          }}
        />
      </div>

      <div className={`form-group ${errorField('phone')}`}>
        <FormInput
          placeholder="Celular"
          minLength={9}
          maxLength={9}
          register={{
            ...register('phone', {
              required: true,
              minLength: 9,
              maxLength: 9,
              pattern: /^[0-9]\d*$/i,
            }),
          }}
        />
      </div>

      <div className={`form-group ${errorField('placa')}`}>
        <FormInput
          placeholder="Placa: ABC-123"
          register={{
            ...register('placa', {
              required: true,
              minLength: 7,
              maxLength: 7,
            }),
          }}
        />
      </div>

      <div className={`form-check ${errorField('terms')}`}>
        <input
          id="term"
          type="checkbox"
          {...register('terms', { required: true })}
        />

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

      <button className="btn" type="submit">
        COTÍZALO
      </button>
    </form>
  );
};

export default FormPersonData;
