import React from 'react';
import { useForm } from 'react-hook-form';
import { DateSelects } from '../Components/DateSelects';
import { Input } from '../Components/Input';
import { RadioSet } from '../Components/RadioSet';
import { Select } from '../Components/CustomSelect';
import { countries, countryNames, range } from '../utils';

export const Pasajero = ({ setTitle, onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const nameRules = {
    required: true,
    minLength: {
      value: 2,
      message: 'Debe tener entre 2 y 29 caracteres',
    },
    maxLength: {
      value: 29,
      message: 'Debe tener entre 2 y 29 caracteres',
    },
  };

  return (
    <div className="row">
      <div className="col-75">
        <p className="passenger-section-title">Datos del pasajero</p>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="row">
            <div className="col-40">
              <Input
                name={'name'}
                label={'Nombre'}
                register={register}
                rules={nameRules}
                errors={errors.name}
              />
            </div>
            <div className="col-40">
              <Input
                name={'surname'}
                label={'Apellido'}
                register={register}
                rules={nameRules}
                errors={errors.surname}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-40">
              <DateSelects
                label={'Fecha de Nacimiento'}
                name={'fecha_nacimiento'}
                years={range(1925, 2022).reverse()}
                control={control}
                rules={{ required: true }}
                errors={errors}
              />
            </div>
            <div className="col-40">
              <RadioSet
                label={'Sexo'}
                name={'sex'}
                className={'passenger-radio'}
                inline={true}
                options={['Masculino', 'Femenino']}
                register={register}
                required={true}
                errors={errors.sex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-30">
              <Select
                name={'id_type'}
                label={'Tipo de Documento'}
                disabled={true}
                defaultValue={'Pasaporte'}
                control={control}
                options={['Pasaporte']}
              />
            </div>
            <div className="col-30">
              <Input
                name={'id_number'}
                label={'Numero de Documento'}
                register={register}
                rules={{
                  required: true,
                  pattern: {
                    value: /^(?!^0+$)[a-zA-Z0-9]{5,20}$/,
                    message: 'Ingrese un numero de document valido',
                  },
                }}
                errors={errors.id_number}
              />
            </div>
            <div className="col-30">
              <Select
                name={'id_country'}
                label={'Pais de Emisión'}
                control={control}
                rules={{ required: true }}
                options={countryNames()}
                errors={errors.id_country}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-40">
              <DateSelects
                label={'Fecha de Caducidad'}
                name={'id_due_date'}
                years={range(2022, 2026)}
                control={control}
                rules={{ required: true }}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-30">
              <Select
                name={'country'}
                label={'Nacionalidad'}
                control={control}
                rules={{ required: true }}
                options={countryNames()}
                errors={errors.country}
              />
            </div>
          </div>
          <div className="row" style={{ justifyContent: 'space-around' }}>
            <div className="col-30">
              <button className="passenger" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

