import { inisialstate } from "./Inisialstate"
import { BRAND_CREATE, BRAND_DELETE, BRAND_EDIT, BRAND_FAILED, BRAND_REAUEST, BRAND_SUCCESS } from "./Typeaction";
 

const ShopReduser =(state=inisialstate,{type,payload})=>{

switch (type) {
    case BRAND_REAUEST:
        return{
            ...state,
            loader:true
        }
    case BRAND_SUCCESS:
        return{
            ...state,
            loader:false,
            brands:payload
        }
    case BRAND_FAILED:
        return{
            ...state,
            loader:false,
            brands:[],
            error:payload
        }
    case BRAND_CREATE:
        return{
            ...state,
            loader:false,
            brands:[...state.brands,payload],
            error:payload
        }

 
    case BRAND_DELETE:
        return{
            ...state,
            loader:false,
            brands:state.brands.filter((data) => data._id !== payload.Brand._id),
            error:''
        }

 
    case BRAND_EDIT:
        return{
            ...state,
            loader:false,
            brands:[...state.brands.filter((data) => data._id !== payload.Brand._id),payload.Brand],
            error:''
        }

 
    default:
        return state
}


}


export default ShopReduser;