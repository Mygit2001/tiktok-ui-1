import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
   try {
      const res = await httpRequest.get(`home`, {
         params: {
            q,
            type,
         },
      });
      return res.ite;
   } catch (error) {
      console.log(error);
   }
};
