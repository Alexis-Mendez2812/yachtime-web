export const filterBySize = (size) => {
   return { type: 'FILTER_BY_SIZE', payload: size };
};

export const filterByModel = (model) => {
   return { type: 'FILTER_BY_MODEL', payload: model };
};

export const filterByYear = (year) => {
   return { type: 'FILTER_BY_YEAR', payload: year };
};

export const filterByGuests = (guests) => {
   return { type: 'FILTER_BY_GUESTS', payload: guests };
};

export const filterByLength = (length) => {
   return { type: 'FILTER_BY_LENGTH', payload: length };
};
