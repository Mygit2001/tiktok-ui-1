import * as httpRequest from '~/utils/httpRequest';

export const home = async () => {
   try {
      const res = await httpRequest.get('home', {
         params: {
            selec
         },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
