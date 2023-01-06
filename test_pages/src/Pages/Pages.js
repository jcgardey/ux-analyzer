import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Widgets } from '../Widgets';
import { Pasajero } from './Pasajero';
import { Pasaporte } from './Pasaporte';
import { Success } from './Success';
import { Checkout } from './Checkout/Checkout';
import { Prestamo } from './Prestamo/Prestamo';
import { RegistroUsuario } from './RegistroUsuario';

export const Pages = () => {
  const [title, setTitle] = useState('Default Title');

  useEffect(() => {
    document.title = title;
  }, [title]);

  const navigate = useNavigate();

  const onSubmit = () => {
    if (window.screenRecorder?.recording) {
      window.screenRecorder.stopRecording(true);
      window.screenRecorder.sendScreencast(
        'http://localhost:8002/api/user_session/new',
        'cors'
      );
      window.screenRecorder.modal.initialize();
    }
    navigate('/success', { replace: true });
  };

  const onError = (errors) => {
    [
      ...new Set(
        Object.keys(errors).map((fieldName) =>
          ['_dia', '_mes', '_anio'].reduce(
            (result, word) => result.replace(word, ''),
            fieldName
          )
        )
      ),
    ].forEach((fieldName) =>
      window.screenRecorder.eventLogger.errorOnWidget(fieldName)
    );
  };

  return (
    <Routes>
      <Route
        path="/widgets"
        element={<Widgets onSubmit={onSubmit} onError={onError} />}
      />
      <Route
        path="/pasajero"
        element={<Pasajero onSubmit={onSubmit} onError={onError} />}
      />
      <Route
        path="/pasaporte"
        element={<Pasaporte onSubmit={onSubmit} onError={onError} />}
      />
      <Route
        path="/checkout"
        element={<Checkout onSubmit={onSubmit} onError={onError} />}
      />
      <Route
        path="/prestamo"
        element={<Prestamo onSubmit={onSubmit} onError={onError} />}
      />
      <Route
        path="/registrarme"
        element={<RegistroUsuario onSubmit={onSubmit} onError={onError} />}
      />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

