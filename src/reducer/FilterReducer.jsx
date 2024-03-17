 const FilterReducer=(state,action)=>{


    switch(action.type){
       
        case 'IS_LOADING':
            return{
                ...state,
                isLoading:false,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                
            }
            case "GET_SORT_VALUE":
            console.log(action.payload)
          return {
            ...state,
            sorting_value: action.payload,
          }; 
          case "SORTING_PRODUCTS":
          let newSortData;
          // let tempSortProduct = [...action.payload];
    
          const { filter_products, sorting_value } = state;
          let tempSortProduct = [...filter_products];

          const sortingProducts = (a, b) => {
            if (sorting_value === "lowest") {
              return a.price - b.price;
            }
    
            if (sorting_value === "highest") {
              return b.price - a.price;
            }
    
            if (sorting_value === "a-z") {
              return a.category.localeCompare(b.category);
            }
    
            if (sorting_value === "z-a") {
              return b.category.localeCompare(a.category);
            }
          };
    
          newSortData = tempSortProduct.sort(sortingProducts);
    
          return {
            ...state,
            filter_products: newSortData,
          };

          
           
         case "UPDATE_FILTERS_VALUE":
                const { name, value } = action.payload;
                   console.log(name,value)
                return {
                  ...state,
                  filters: {
                    ...state.filters,
                    [name]: value,
                  },
                };

        case "FILTER_PRODUCTS":
            let{all_products}=state;
            let tempFilterProduct=[...all_products];
            const{text,category}=state.filters;
             console.log(text)
            if(text)
            {
                tempFilterProduct=tempFilterProduct.filter((curElem)=>{
                    return curElem.title.toLowerCase().includes(text.toLowerCase())
                })
            }

            if (category !== "all") {
              tempFilterProduct = tempFilterProduct.filter(
                (curElem) => curElem.category === category
              );
            }
             
              // if(category.toLowerCase()=="all")
              // {
              //   tempFilterProduct=[...all_products]
              // }
            return{
                  ...state,
                  filter_products:tempFilterProduct
            }

        default :return state
    }
}
export default FilterReducer