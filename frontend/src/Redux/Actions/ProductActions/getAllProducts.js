import axios from 'axios';

export const getAllProducts = () => {
   return (dispatch) => {
      axios('/product/all')
         .then((ans) => {
            return dispatch({ type: 'ALL_YATES', payload: ans.data });
         })
         .catch((err) => console.log(err));
   };
};
