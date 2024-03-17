import React from 'react';
import Loader from './Loader';
import ProductPagination from './ProductPagination';
import { useFilterContext } from '../context/FilterContext';

const AllProduct = () => {
    
    
 const{filter_products,isLoading} =useFilterContext();
//   console.log(filter_products ,isLoading);
   return(
    <div className="container-fluid mt-3" id='allProduct'>
         <div className="container">
         <h2 className='text-center text-capitalize fw-bold title'>Our Products</h2>
         {
            isLoading ? <Loader/>: 
            <ProductPagination filter_products={filter_products}/>
         }
         </div>
    </div>
   )
};

export default AllProduct;
