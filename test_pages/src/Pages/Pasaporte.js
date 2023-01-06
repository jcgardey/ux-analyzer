import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioSet } from '../Components/RadioSet';
import { Select } from '../Components/CustomSelect';
import { cities, provinces } from '../utils';
import './Pasaporte.css';

export const Pasaporte = ({ onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const province = watch('provincia', 'Buenos Aires');
  const city = watch('city');

  const offices = {
    'La Plata': ['Renaper La Plata', 'Renaper ANSES City Bell'],
    'Mar del Plata': [
      'Renaper Terminal de Ómnibus Mar del Plata',
      'Renaper Terminal de Ómnibus Mar del Plata - TARDE',
    ],
  };

  return (
    <>
      <h2 className="title">Sacar turno</h2>
      <h3>Pasaporte</h3>
      <div className="col-50">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="passport-section">
            <p className="passport-section-title">
              1. Eleg&iacute; la provincia, localidad y sede del tr&aacute;mite
            </p>
            <Select
              name={'provincia'}
              label={'Provincia'}
              defaultValue={'Buenos Aires'}
              control={control}
              rules={{ required: true }}
              options={provinces}
            />
            <Select
              name={'city'}
              label={'Localidad'}
              control={control}
              rules={{ required: true }}
              errors={errors.city}
              options={cities[province]}
            />
            <div style={{ display: city !== undefined }}>
              <RadioSet
                label={''}
                name={'oficina'}
                inline={false}
                options={offices[city] || []}
                register={register}
                rules={{ required: 'Elija un lugar' }}
                errors={errors.oficina}
              />
            </div>
          </div>
          <div className="passport-section">
            <p className="passport-section-title">
              2. Eleg&iacute; una fecha para el turno
            </p>
            <RadioSet
              label={''}
              name={'fecha'}
              inline={false}
              options={[
                'Lun. 1 de agosto',
                'Mar. 2 de agosto',
                'Mie. 3 de agosto',
                'Jue. 4 de agosto',
                'Vie. 5 de agosto',
                'Lu. 8 de agosto',
                'Mar. 9 de agosto',
                'Mie. 10 de agosto',
                'Jue. 11 de agosto',
              ]}
              register={register}
              rules={{ required: 'Elija una fecha' }}
              errors={errors.fecha}
              style={{ display: 'flex', width: '500px', flexWrap: 'wrap' }}
            />
          </div>
          <div className="passport-section">
            <p className="passport-section-title">
              3. Eleg&iacute; un horario de atenci&oacute;n
            </p>
            <RadioSet
              label={''}
              name={'hora'}
              inline={true}
              options={[
                '11:15',
                '11:25',
                '11:35',
                '11:45',
                '11:55',
                '12:05',
                '12:15',
                '12:25',
                '12:35',
              ]}
              register={register}
              rules={{ required: 'Elija un horario' }}
              errors={errors.hora}
            />
          </div>
          <button type="submit" className="passport">
            Confirmar
          </button>
        </form>
      </div>
    </>
  );
};

