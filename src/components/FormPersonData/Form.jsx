import React from 'react';

export const FormSelect = ({ defaultValue, register }) => {
  return (
    <select className="form-select" defaultValue={defaultValue} {...register}>
      <option value="DNI">DNI</option>
      <option value="CE">CE</option>
    </select>
  );
};

export const FormInput = ({
  type = 'text',
  placeholder,
  minLength,
  maxLength,
  register,
}) => {
  return (
    <input
      className="form-control"
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      {...register}
    />
  );
};
