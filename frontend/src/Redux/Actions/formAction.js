import axios from 'axios';

export const postYateForm = async (form) => {
   try {
      await axios.post('/api/upload', form);
      return 'done';
   } catch (err) {
      console.log(err);
   }
};
