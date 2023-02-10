import Banner from '~/components/Banner';
import NewRelease from '~/components/NewRelease';
import * as homeService from '~/services/homeService';

const fetchApi = async () => {
   setLoading(true);

   const results = await searchService.search(debouncedValue);
   console.log(results);
   setSearchResults(results);
   setLoading(false);
};
fetchApi();
}, []);
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
