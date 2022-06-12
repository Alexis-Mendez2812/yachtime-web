import axios from 'axios';

export const ALL_YATES = 'ALL_YATES';
export const POST_USER = 'POST_USER';
export const GET_USERS = 'GET_USERS';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const DELETE_YATE = 'DELETE_YATE';
export const FILT_BY_STATS = 'FILT_BY_STATS';
export const FILT_BY_ROLE = 'FILT_BY_ROLE';
export const VACIAR = 'VACIAR';
export const GET_ID_NAME = 'GET_ID_NAME';
export const AUTHORIZE = 'AUTHORIZE';
export const DESAUTHORIZE = 'DESAUTHORIZE';
export const BANNED = 'BANNED';

export function allYates() {
   return async function (dispatch) {
      let res = await axios.get('/products/all');
      let payload = await res.data;
      return dispatch({ type: ALL_YATES, payload });
   };
}

export function postUserGoogle(user) {
   return async function (dispatch) {
      let usuario = await axios.post('/users', user);
      return dispatch({ type: POST_USER, payload: usuario.data });
   };
}

//ADMIN
export function getAllUsers() {
   return async function (dispatch) {
      try {
         const users = await axios('/users/all');
         return dispatch({
            type: GET_USERS,
            payload: users.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}
export function authorize(email) {
   return async function (dispatch) {
      try {
         const users = await axios.post('/users/authorize', { email });
         return dispatch({
            type: AUTHORIZE,
            payload: users.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}
export function desauthorize(email) {
   return async function (dispatch) {
      try {
         const users = await axios.post('/users/desauthorize', { email });
         // console.log(users.data)
         return dispatch({
            type: DESAUTHORIZE,
            payload: users.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}
export function banned(email) {
   return async function (dispatch) {
      try {
         const users = await axios.post('/users/banned', { email });
         // console.log(users.data)
         return dispatch({
            type: BANNED,
            payload: users.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

//PRODUCTS

export function getAllProducts() {
   //para trerce todos los comics
   return async function (dispatch) {
      try {
         const { data } = await axios.get(`/products/all`);
         return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data,
         });
      } catch (err) {
         alert('error get comics(se rompio)', err);
      }
   };
}

export const deleteYate = (id) => {
   console.log(id);
   return async (dispatch) => {
      try {
         const comicDelete = await axios.delete(`/products/delete/${id}`);

         return dispatch({
            type: 'DELETE_YATE',
            payload: id,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const filterByStats = (payload) => {
   return {
      type: FILT_BY_STATS,
      payload: payload,
   };
};

export const filterByRole = (payload) => {
   return {
      type: FILT_BY_ROLE,
      payload: payload,
   };
};

//PAYPAL
export function postPayment(pago) {
   return async function (dispatch) {
      try {
         const { data } = await axios.post(`/users/payment`, pago);
         return dispatch({
            type: 'POST_PAYMENT',
            payload: data,
         });
      } catch (err) {
         alert('error post paypal(se rompio)', err);
      }
   };
}

export function vaciar() {
   return {
      type: 'VACIAR',
   };
}

export function getIdYate(id) {
   return async function (dispatch) {
      try {
         let json = await axios.get(`/products/detail/${id}`);
         return dispatch({
            type: 'GET_ID_NAME',
            payload: json.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}
