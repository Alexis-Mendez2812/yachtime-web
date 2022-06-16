import axios from 'axios';

export const postYateForm = async (form) => {
   try {
      await axios.post('/api/upload', form);
      return 'done';
   } catch (err) {
      console.log(err);
   }
};

export const putYateForm = async (form) => {
   try {
      await axios.post('/api/edit', form);
      return 'done';
   } catch (err) {
      console.log(err);
   }
};

export const createNewUser = async (form) => {
   try {
      const value = await axios.post('/api/user', form);
      return value.data.status;
   } catch (err) {
      return false;
   }
};

export const loginUser = async (data) => {
   try {
      const value = await axios.post('/api/loguser', data);
      return value.data.status;
   } catch (err) {
      return false;
   }
};
