import React from 'react';
import { Input } from '../../Components/Input';
import { RadioSet } from '../../Components/RadioSet';
import './Payment.css';

export const Payment = ({ register, errors }) => (
  <div className="checkout-payment container">
    <h2>Pago</h2>
    <div className="container">
      <RadioSet
        label={'Método de Pago'}
        name={'method'}
        inline={false}
        options={[
          'Transferencia Bancaria',
          'MercadoPago',
          'Tarjeta de Crédito',
        ]}
        register={register}
        rules={{ required: 'Elija un medio de pago' }}
        errors={errors.method}
      />
      <div className="credit-card-info">
        <Input
          name={'card_name'}
          label={'Nombre'}
          register={register}
          rules={{ required: true }}
          errors={errors['card_name']}
        />
        <Input
          name={'card_number'}
          label={'Número de Tarjeta'}
          register={register}
          rules={{
            required: true,
            pattern: {
              value:
                /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
              message: 'Ingrese un número de tarjeta válido',
            },
          }}
          errors={errors['card_number']}
        />
        <div className="row">
          <div className="col-40">
            <Input
              name={'card_expiration_date'}
              label={'Vencimiento'}
              register={register}
              rules={{
                required: true,
                validate: (value) =>
                  (value.split('/').length === 2 &&
                    new Date(value.split('/')[1], value.split('/')[0], 0) >
                      new Date()) ||
                  'ingrese una fecha válida',
              }}
              errors={errors['card_expiration_date']}
            />
          </div>
          <div className="col-40">
            <Input
              name={'card_code'}
              label={'Código'}
              register={register}
              rules={{
                required: true,
                pattern: {
                  value: /^\d{3}$/,
                  message: 'Ingrese un código de seguridad válido',
                },
              }}
              errors={errors['card_code']}
            />
          </div>
        </div>
        <button className="checkout" type="submit">
          Finalizar
        </button>
      </div>
    </div>
  </div>
);

