import axios from 'axios';

export const saveAllMessages = async (data) => {
   try {
      const res = await axios.post('/chat/', data);
      if (res) {
         return 'Si';
      } else {
         return 'No';
      }
   } catch (err) {
      console.log(err);
      return 'No';
   }
};

export const bringAllMessages = async ({ owner, receptor }) => {
   try {
      const res = await axios(`/chat/?owner=${owner}&receptor=${receptor}`);
      if (res) {
         return res.data;
      } else {
         return 'No';
      }
   } catch (err) {
      console.log(err);
      return 'No';
   }
};
