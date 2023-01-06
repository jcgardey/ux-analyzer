import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../Components/Input';
import { Select } from '../../Components/CustomSelect';
import { provinces } from '../../utils';

import './Prestamo.css';
import image from './prestamo.png';

export const Prestamo = ({ onSubmit, onError }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="row">
      <div className="col-40">
        <img src={image} style={{ width: '100%' }} />
        <p className="prestamo-paragraph">
          Para remodelar o equipar tu casa, emprender un negocio o lo que te
          propongas. ¡Concretá tu proyecto con{' '}
          <strong>la financiación más conveniente!&nbsp;&nbsp;</strong>
        </p>
        <p className="prestamo-paragraph">
          Comenzá a disfrutar de tu préstamo ahora y pagalo{' '}
          <strong>en hasta 96 cuotas.</strong>&nbsp;&nbsp;
        </p>
        <p className="prestamo-paragraph">
          La solicitud es <strong>100% online</strong>, y se acredita
          inmediatamente. Además, definís el monto y el plazo que más te
          convenga.&nbsp;&nbsp;
        </p>
        <p className="prestamo-paragraph">
          Tenés la posibilidad de <strong>cancelarlo anticipadamente</strong>{' '}
          cuando quieras, en forma total o parcial.&nbsp;&nbsp;
        </p>
      </div>
      <div className="col-50">
        <div className="prestamo-section container">
          <h2>Simul&aacute; tu pr&eacute;stamo en pesos</h2>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="row">
              <div className="col-20">
                <Select
                  name={'tipo'}
                  label={'Tipo de cálculo'}
                  control={control}
                  rules={{ required: true }}
                  options={['Por Monto', 'Por Cuota']}
                  value="Por Monto"
                  errors={errors.tipo}
                />
              </div>
              <div className="col-30">
                <Input
                  name={'monto'}
                  label={'Monto del Préstamo'}
                  register={register}
                  rules={{
                    required: true,
                    validate: (value) =>
                      parseInt(value) >= 1000 ||
                      'El monto debe ser mayor o igual a 1.000',
                  }}
                  errors={errors.monto}
                />
              </div>
              <div className="col-20">
                <Select
                  name={'plazo'}
                  label={'Plazo'}
                  control={control}
                  rules={{ required: true }}
                  options={[
                    '12 meses',
                    '18 meses',
                    '24 meses',
                    '36 meses',
                    '48 meses',
                    '60 meses',
                    '72 meses',
                    '84 meses',
                    '96 meses',
                  ]}
                  value="12 meses"
                  errors={errors.tipo}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-40">
                <Select
                  name={'tipo_cliente'}
                  label={'Tipo de cliente'}
                  control={control}
                  rules={{ required: true }}
                  options={['Exclusive', 'Premium', 'Cartera General', 'Start']}
                  errors={errors['tipo_cliente']}
                />
              </div>
              <div className="col-40">
                <Select
                  name={'jurisdiccion'}
                  label={'Jurisdicción'}
                  control={control}
                  rules={{ required: true }}
                  options={provinces}
                  errors={errors['jurisdiccion']}
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                display: 'block',
                marginLeft: 'auto',
                backgroundColor: '#C4161C',
                borderRadius: '2px',
              }}
            >
              Simular
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

