import { useParams } from 'react-router-dom';
import React from 'react';
import CheckoutBut from '../PayPal/PayPal';

export default function GameDetail() {
   const { mount } = useParams();

   return (
      <>
         <CheckoutBut totalPrice={mount} items={1} totalItems={1} />
      </>
   );
}
