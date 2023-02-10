import Banner from '~/components/Banner';
import NewRelease from '~/components/NewRelease';
import * as homeService from '~/services/homeService';
import { useEffect } from 'react';

function Home() {
   useEffect(() => {
      const fetchApi = async () => {
         const results = await homeService.home();
         console.log(results);
      };
      fetchApi();
   }, []);

   return (
      <>
         <div>
            <Banner />
            <NewRelease />
         </div>
      </>
   );
}

export default Home;
