import React from 'react';
import './paginado.css';
import { Button } from './StyledComponents';

export default function Paginado({ yatesPerPage, allYates, paginado }) {
   let pageNumbers = [];
   for (let i = 0; i < Math.ceil(allYates / yatesPerPage); i++) {
      pageNumbers.push(i + 1);
   }
   return (
      <div
         style={{
            display: 'flex',
            marginTop: '0.5rem',
            justifyContent: 'center',
            height: '2rem',
            alignItems: 'center',
         }}
      >
         {pageNumbers &&
            pageNumbers.map((n) => {
               return (
                  <Button
                     key={n}
                     onClick={(setCharging) => {
                        paginado(n);
                     }}
                  >
                     {n}
                  </Button>
               );
            })}
      </div>
   );
}
