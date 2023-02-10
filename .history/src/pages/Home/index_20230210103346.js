import Banner from '~/components/Banner';
import NewRelease from '~/components/NewRelease';
import * as homeService from '~/services/homeService';
import { useEffect } from 'react';

useEffect(() => {
   
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
