import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/React-Toastify.css';
function App() {
   const { test } = useSelector(state => state.const express = require('express')
   const app = express()
   require('dotenv').config()
   const port = process.env.PORT || 5000
   
   // !important! 
   // you need to install the following libraries |express|[dotenv > if required]
   // or run this command >> npm i express dotenv 
   
   app.get('/' , (req , res)=>{
   
      res.send('hello from simple server :)')
   
   })
   
   
   app.listen(port , ()=> console.log('> Server is up and running on port : ' + port)))
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;
                  if (route.layout) {
                     Layout = route.layout;
                  } else if (route.layout === null) {
                     Layout = Fragment;
                  }
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
