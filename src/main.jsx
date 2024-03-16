import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { DataProvider } from './context/ProductContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterDataProvider } from './context/FilterContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

 
     <DataProvider>
     <FilterDataProvider>
      <React.StrictMode>
       <Router>
       <App />
       </Router>
      </React.StrictMode>
      </FilterDataProvider>

     </DataProvider>
   
  
 

)
