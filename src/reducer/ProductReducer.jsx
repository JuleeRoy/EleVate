const ProductReducer=(state,action)=>{
    switch (action.type) {
        case "IS_LOADING":
          return {
            ...state,
            isLoading: true,
          };
        case "IS_ERROR":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
    
        case "ALL_PRODUCTS":
            console.log(action.payload)
         return {
            ...state,
            isLoading: false,
            isError: false,
            products: action.payload, // containe all api data
           
          };
          case"SET_SINGLE_PRODUCT":
          return{
              ...state,
              singleProduct:action.payload,
              isSingleLoading:false
          }
          case "SET_SINGLE_LOADING":
              return {
                ...state,
                isSingleLoading: true,
              };
            case "SET_SINGLE_ERROR":
              return {
                ...state,
                isSingleLoading: false,
                isSingleError: true,
              };
          default:
            return {
              ...state,
            };

        }

}

export default ProductReducer