import React from 'react';
import { useForm } from 'react-hook-form';
import { Select } from '../Components/CustomSelect';
import { Input } from '../Components/Input';

import './RegistroUsuario.css';

export const RegistroUsuario = ({ onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const email = watch('email', 'Buenos Aires');
  const password = watch('password');

  return (
    <>
      <div
        style={{ width: '100%', height: '30px', backgroundColor: 'black' }}
      ></div>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h2
          className="title"
          style={{ textAlign: 'center', color: 'rgb(179, 179, 179)' }}
        >
          Registro de Nuevo Usuario
        </h2>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="row">
            <div className="col-40">
              <Input
                name={'name'}
                label={'Nombre y Apellido'}
                register={register}
                errors={errors.name}
              />
              <Input
                name={'email'}
                label={'Email'}
                register={register}
                errors={errors.email}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Ingrese un email válido',
                  },
                }}
              />
              <Input
                name={'password'}
                type={'password'}
                label={'Contraseña'}
                register={register}
                errors={errors.password}
                rules={{
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{6,}$/,
                    message:
                      'Debe contener como mínimo 6 caracteres, al menos una letra, un número y un caracter especial',
                  },
                }}
              />
              <Input
                name={'phone'}
                label={'Telefono'}
                register={register}
                errors={errors.phone}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[0-9]{2,10}$/,
                    message: 'Ingrese solo números',
                  },
                }}
              />
            </div>
            <div className="col-40">
              <div className="row" style={{ margin: '0' }}>
                <div className="col-40">
                  <Input
                    name={'documento'}
                    label={'Documento'}
                    register={register}
                    errors={errors.documento}
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/,
                        message: 'Ingrese un DNI válido',
                      },
                    }}
                  />
                </div>
                <div className="col-40">
                  <Select
                    name={'genre'}
                    label={'Genero'}
                    defaultValue={'No Informar'}
                    control={control}
                    options={['Femenino', 'Masculino', 'Otro', 'No Informar']}
                  />
                </div>
              </div>
              <Input
                name={'repeat_email'}
                label={'Repetir Email'}
                register={register}
                errors={errors['repeat_email']}
                rules={{
                  required: true,
                  validate: (value) =>
                    value === email || 'Los emails deben ser iguales',
                }}
              />
              <Input
                name={'repeat_password'}
                type={'password'}
                label={'Repetir Contraseña'}
                register={register}
                errors={errors['repeat_password']}
                rules={{
                  required: true,
                  validate: (value) =>
                    value === password || 'Las contraseñas deben ser iguales',
                }}
              />
              <Input
                name={'birthdate'}
                label={'Fecha de Nacimiento'}
                register={register}
                errors={errors.birthdate}
                rules={{
                  required: true,
                  pattern: {
                    value: /^\d{2}\/\d{2}\/\d{4}$/,
                    message: 'Ingrese en formato dd/mm/aaaa',
                  },
                }}
              />
            </div>
          </div>
          <div className="row" style={{ justifyContent: 'space-around' }}>
            <div className="col-40">
              <button
                style={{ width: '100%', backgroundColor: '#06B9E6' }}
                type="submit"
              >
                Registrarme
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

