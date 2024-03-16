import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer"

const DataContext=createContext();

const API="https://fakestoreapi.com/products"

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    isSingleLoading:false,
    isSingleError:false,
    singleProduct:{},
}

const DataProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

    const getProducts=async(url)=>{
        dispatch({type:"IS_LOADING"})
       try {
        const res= await axios.get(url)
        const allProducts=await res.data;
        console.log(allProducts)
        dispatch({type:"ALL_PRODUCTS",payload:allProducts})
        
       } catch (error) {
        dispatch({type:"IS_ERROR"})
       }

    }

    const getSingleProduct= async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
             try {
             
                const res= await axios.get(url);
                const product=await res.data;
                console.log(product)
                dispatch({type:"SET_SINGLE_PRODUCT" , payload:product})
             } catch (error) {
                console.log(error)
                 dispatch({type:"SET_SINGLE_ERROR"})
             }
       }

    // getting all Products
    useEffect(()=>{
        getProducts(API);
    },[])
  
    return(
        <DataContext.Provider value={{...state,getSingleProduct }}>
        {children}
    </DataContext.Provider>
    )
};


// custom hook
const useProductContext=()=>{
    return useContext(DataContext)
}
export {DataProvider  ,useProductContext}