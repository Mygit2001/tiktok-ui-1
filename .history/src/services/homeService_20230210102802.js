import * as httpRequest from '~/utils/httpRequest';

export const search = async () => {
   try {
      const res = await httpRequest.get(`users/search`, {
         params: {
         },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
