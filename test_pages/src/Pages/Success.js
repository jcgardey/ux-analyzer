import React from 'react';
import successImage from '../assets/success.png';

export const Success = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Formulario enviado exitosamente</h2>
    <img
      style={{ display: 'block', margin: '0 auto', width: '20em' }}
      src={successImage}
    />
    <h3 style={{ textAlign: 'center' }}>
      Pod&eacute;s cerrar esta pestaña y continuar con el siguiente formulario
    </h3>
  </>
);

