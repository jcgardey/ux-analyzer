import React from 'react';
import { Input } from '../../Components/Input';
import { Select } from '../../Components/CustomSelect';
import { provinces } from '../../utils';

export const Shipping = ({ register, control, errors }) => (
  <>
    <Input
      name={'name'}
      label={'Nombre'}
      register={register}
      rules={{ required: true }}
      errors={errors.name}
    />
    <Input
      name={'dni'}
      label={'DNI'}
      register={register}
      rules={{
        required: true,
        pattern: {
          value: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/,
          message: 'Ingrese un DNI válido',
        },
      }}
      errors={errors.dni}
    />
    <Input
      name={'email'}
      label={'Correo Electrónico'}
      register={register}
      rules={{
        required: true,
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: 'Ingrese un email válido',
        },
      }}
      errors={errors.email}
    />
    <Input
      name={'address'}
      label={'Dirección'}
      register={register}
      rules={{ required: true }}
      errors={errors.address}
    />
    <Input
      name={'city'}
      label={'Ciudad'}
      register={register}
      rules={{ required: true }}
      errors={errors.city}
    />
    <Select
      name={'provincia'}
      label={'Provincia'}
      control={control}
      rules={{ required: true }}
      errors={errors.provincia}
      options={provinces}
    />
    <Input
      name={'postal'}
      label={'Código Postal'}
      register={register}
      rules={{
        required: true,
        pattern: {
          value: /^\d{4}$/,
          message: 'Ingrese un Código Postal válido',
        },
      }}
      errors={errors.postal}
    />
  </>
);
