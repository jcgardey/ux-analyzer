import React from 'react';
import buzo from '../../assets/buzo.png';

const Product = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #b3b3b3',
    }}
  >
    <div style={{ width: '6em' }}>
      <img src={buzo} style={{ width: '100%' }} />
    </div>
    <p style={{ width: '50%' }}>Buzo Nike G4G Chevron Crew</p>
    <p className="item-price">&#36;8.400</p>
  </div>
);

export const Order = () => (
  <div className="checkout-payment container">
    <h2>Resumen de Compra</h2>
    <Product />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#757575',
      }}
    >
      <p style={{ fontSize: '20px' }}>Subtotal</p>
      <p className="item-price">&#36;8.400</p>
    </div>
  </div>
);

