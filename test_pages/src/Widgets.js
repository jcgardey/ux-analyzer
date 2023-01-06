import React from 'react';
import { Input } from './Components/Input';
import { Select } from './Components/CustomSelect';
import { RadioSet } from './Components/RadioSet';
import { DateSelects } from './Components/DateSelects';
import { Datepicker } from './Components/Datepicker';
import { useForm } from 'react-hook-form';

export const Widgets = ({ onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="container">
      <div className="col-4">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            name={'name'}
            label={'Nombre'}
            register={register}
            rules={{ required: true }}
            errors={errors.name}
          />
          <Input
            name={'surname'}
            label={'Apellido'}
            register={register}
            errors={errors.surname}
          />
          <Select
            name={'city'}
            label={'Ciudad'}
            control={control}
            register={register}
            rules={{ required: true }}
            errors={errors.city}
            options={['La Plata', 'Buenos Aires', 'Mar del Plata']}
          />
          <RadioSet
            label={'Genero'}
            name={'genre'}
            inline={true}
            options={['Masculino', 'Femenino']}
            register={register}
            required={true}
            errors={errors.genre}
          />
          <DateSelects
            label={'Fecha de Nacimiento'}
            name={'fecha_nacimiento'}
            years={['2022', '2021', '2020', '2019']}
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <Datepicker
            label={'Fecha de Inicio'}
            name={'start'}
            register={register}
            errors={errors.start}
          />
          <div className="form-field">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

