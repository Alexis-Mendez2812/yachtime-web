export const filterBySize = (size) => {
   return { type: 'FILTER_BY_SIZE', payload: size };
};

export const filterByModel = (model) => {
   return { type: 'FILTER_BY_MODEL', payload: model };
};

export const filterByYear = (year) => {
   return { type: 'FILTER_BY_YEAR', payload: year };
};
