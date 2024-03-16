import React from 'react'
import SearchBar from './SearchBar'
import AuthandCart from './AuthandCart'
import { useFilterContext } from "../context/FilterContext";

const SearchSection = () => {
  const {
   all_products,
  } = useFilterContext();

  // getting category value
const getData=(data,property)=>{
  let value=data.map((element)=>{
   return element[property];
  })
value=["All",...new Set(value)];
return value;
}
const categoryData=getData(all_products,"category")
console.log(categoryData)
  return (
    <div className="container mt-3">
        <div className="row flex-wrap-reverse">
            <div className="col-12 col-md-8">
                <SearchBar categoryData={categoryData} />
            </div>
            <div className="col-12 col-md-4">
                <AuthandCart categoryData={categoryData}/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection