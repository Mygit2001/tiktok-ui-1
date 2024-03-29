import * as httpRequest from '~/utils/httpRequest';

export const home = async () => {
   try {
      const res = await httpRequest.get('home', {
         params: {},
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
