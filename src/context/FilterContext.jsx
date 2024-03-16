import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const FilterContext=createContext();

const initialState={
    isLoading:false,
    filter_products:[],
    all_products:[],
    filters:{
        text:"",
        category:"all"
    }
}

export const FilterDataProvider=({children})=>{

    const{products}=useProductContext();

    const[state,dispatch]=useReducer(reducer,initialState);

    //  update the filtervalue 
    const updateFilterValue=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        
        console.log(event.target.value)
     
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    }

    useEffect(()=>{
       dispatch({type:"IS_LOADING",payload:products});
       dispatch({type:"FILTER_PRODUCTS"});
    },[products,state.filters])


    return <FilterContext.Provider value={{...state , updateFilterValue}} >
        {children}
    </FilterContext.Provider>
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
}