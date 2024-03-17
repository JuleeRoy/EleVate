import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();

const initialState = {
  isLoading: false,
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
  },
};

export const FilterDataProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.text;

    let match = userValue.match(/\((.*?)\)/); // This regex matches anything within parentheses
    let extractedValue = match ? match[1] : null;
     let newVal=extractedValue.toLowerCase();
    dispatch({ type: "GET_SORT_VALUE", payload: newVal });
    // console.log(newVal)
    // Update the text content of the dropdown toggle button
    
    event.currentTarget.parentNode.parentNode.querySelector('.dropdown-toggle').textContent = userValue;
  };

  //  update the filtervalue
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    console.log(event.target.value);

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "IS_LOADING", payload: products });
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.filters, state.sorting_value]);

  return (
    <FilterContext.Provider value={{ ...state, updateFilterValue, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
