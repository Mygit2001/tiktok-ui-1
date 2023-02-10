import Banner from '~/components/Banner';
import NewRelease from '~/components/NewRelease';
import * as homeSe from '~/services/searchService';
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
