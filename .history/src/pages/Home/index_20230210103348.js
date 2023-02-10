import Banner from '~/components/Banner';
import NewRelease from '~/components/NewRelease';
import * as homeService from '~/services/homeService';
import { useEffect } from 'react';

useEffect(() => {
   const fetchApi = async () => {
      setLoading(true);
   
      const results = await homeService.home();
      console.log(results);
      setSearchResults(results);
      setLoading(false);
   };
   fetchApi();
   }, []);
})
function Home() {
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
