import {
   ALL_YATES,
   POST_USER,
   GET_USERS,
   GET_ALL_PRODUCTS,
   DELETE_YATE,
   FILT_BY_STATS,
   FILT_BY_ROLE,
   VACIAR,
   GET_ID_NAME,
   AUTHORIZE,
   DESAUTHORIZE,
   BANNED,
   FILT_BY_STATS_YACH,
   FILT_BY_MODEL_YACH
} from '../Actions/actions';

const initialState = {
   allYates: [],
   copyYates: [],
   myYates: [],
   favoritesYates: [],
   yateSelected: {},
   userSession: {},
   users: [],
   aux: false,
   copyUsers: [],
   oneYate: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
   switch (type) {
      case ALL_YATES:
         return { ...state, allYates: payload, copyYates: payload };
      case POST_USER:
         return { ...state, userSession: payload,myYates: payload.Products };
      case GET_ALL_PRODUCTS:
         return { ...state, allYates: payload, copyYates: payload };
      case AUTHORIZE:
         return { ...state, Users: payload, copyUsers: payload };
      case DESAUTHORIZE:
         return { ...state, Users: payload, copyUsers: payload };
      case BANNED:
         return { ...state, Users: payload, copyUsers: payload };
      case GET_USERS:
         return {
            ...state,
            users: payload,
            copyUsers: payload,
         };
      case DELETE_YATE:
         let deletedYate = state.allYates.filter(
            (c) => c.id !== payload
         );
         return {
            ...state,
            allYates: [...deletedYate],
            copyYates: [...deletedYate],
         };
      case FILT_BY_STATS:
         let allUse = state.users;

         let userFillt;

         if (payload === 'all') {
            userFillt = allUse;
         } else {
            userFillt = allUse.filter(
               (e) => payload === e.createdAt.substring(5, 7)
            );
         }

         return {
            ...state,
            copyUsers: userFillt,
         };

      case FILT_BY_STATS_YACH:
         let yachs = state.allYates;

         let yachsFillt;

         if (payload === 'all') {
            yachsFillt = yachs;
         } else {
            yachsFillt = yachs.filter(
               (e) => payload === e.createdAt.substring(5, 7)
            );
         }

         return {
            ...state,
            copyYates: yachsFillt,
         };
      case FILT_BY_MODEL_YACH:
         
         let yachsFilltModel;

         if (payload === 'all') {
            yachsFilltModel = state.allYates;
         } 
         else if(payload === '49') {
            yachsFilltModel = state.allYates.filter((yate) => {
               return yate.model <=payload ;
            });
         }
         else if(payload === '90') {
            yachsFilltModel = state.allYates.filter((yate) => {
               return yate.model >= payload ;
            });
         }
         else if(payload === '89') {
            yachsFilltModel = state.allYates.filter((yate) => {
               return yate.model <=payload && yate.model >= "50" ;
            });
         }

         return {
            ...state,
            copyYates: yachsFilltModel,
         };
         case FILT_BY_ROLE:
         let allUsers = state.users;

         let userFill;

         if (payload === 'all') {
            userFill = allUsers;
         } else {
            userFill = allUsers.filter((yate) => {
               return yate.role.includes(payload);
            });
         }

         return {
            ...state,
            copyUsers: userFill,
         };
      case VACIAR:
         return {
            ...state,
            yateSelected: {},
         };
      case GET_ID_NAME:
         return {
            ...state,
            yateSelected: payload,
         };
      case 'FILTER_BY_SIZE':
         const allData = state.copyYates;

         let filSize;

         if (payload === 'all') {
            filSize = allData;
         } else {
            filSize = allData.filter((yate) => {
               return yate.model === Number(payload);
            });
         }

         return {
            ...state,
            copyYates: filSize,
         };
      case 'FILTER_BY_MODEL':
         const allBoats = state.copyYates;

         let filModel;

         if (payload === 'all') {
            filModel = allBoats;
         } else {
            filModel = allBoats.filter((yate) => {
               return yate.make === payload;
            });
         }

         return {
            ...state,
         copyYates: filModel,
         };
      case 'FILTER_BY_YEAR':
         const everyBoat = state.copyYates;
         let filYear;
         if (payload === 'all') {
            filYear = everyBoat;
         } else {
            filYear = everyBoat.filter((yate) => {
               return yate.year === Number(payload);
            });
         }

         return {
            ...state,
            allYates: filYear,
         };
      case 'FILTER_BY_GUESTS':
         const everyBoat2 = state.copyYates;
         let filGuests;
         if (payload === 'all') {
            filGuests = everyBoat2;
         } else {
            filGuests = everyBoat2.filter((yate) => {
               return yate.guests === Number(payload);
            });
         }
         return {
            ...state,
            copyYates: filGuests,
         };
      case 'FILTER_BY_LENGTH':
         const everyBoat3 = state.copyYates;
         let filLength;
         if (payload === 'all') {
            filLength = everyBoat3;
         } else {
            filLength = everyBoat3.filter((yate) => {
               return yate.length === payload;
            });
         }
         return {
            ...state,
            allYates: filLength,
         };
      case 'GET_YATE_DETAIL':
         const arr = [];
         arr.push(payload);
         return {
            ...state,
            oneYate: arr,
         };
      case 'AUX':
         return {
            ...state,
            aux: payload,
         };

      default:
         return state;
   }
}
