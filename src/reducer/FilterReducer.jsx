 const FilterReducer=(state,action)=>{


    switch(action.type){
       
        case 'IS_LOADING':
            return{
                ...state,
                isLoading:false,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                
            }
           
           
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