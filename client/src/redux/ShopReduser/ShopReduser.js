import { inisialstate } from "./Inisialstate"
import { BRAND_CREATE, BRAND_DELETE, BRAND_EDIT, BRAND_FAILED, BRAND_REAUEST, BRAND_SUCCESS, CATAGORY_CREATE, CATAGORY_DELETE, CATAGORY_EDIT, CATAGORY_FAILED, CATAGORY_REAUEST, CATAGORY_SUCCESS, TAG_CREATE, TAG_DELETE, TAG_EDIT, TAG_FAILED, TAG_REAUEST, TAG_SUCCESS } from "./Typeaction";
 

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
      state.brands[state.brands.findIndex((data)=> data._id ===payload._id)]=payload


        return{
            ...state,
            loader:false,
            brands: state.brands,
            error:''
        }
 
        case CATAGORY_REAUEST:
            return{
                ...state,
                loader:true
            }
        case CATAGORY_SUCCESS:
            return{
                ...state,
                loader:false,
                categorys:payload
            }
        case CATAGORY_FAILED:
            return{
                ...state,
                loader:false,
                categorys:[],
                error:payload
            }
            case CATAGORY_CREATE:
        return{
            ...state,
            loader:false,
            categorys:[...state.categorys,payload],
            error:payload
        }
 
    case CATAGORY_DELETE:
        return{
            ...state,
            loader:false,
            
            categorys:state.categorys.filter((data) => data._id !== payload.category._id),
            error:''
        }


    case CATAGORY_EDIT :
      state.categorys[state.categorys.findIndex((data)=> data._id ===payload._id)]=payload


        return{
            ...state,
            loader:false,
            categorys: state.categorys,
            error:''
        }


        case TAG_REAUEST:
        return{
            ...state,
            loader:true
        }
    case TAG_SUCCESS:
        return{
            ...state,
            loader:false,
            tags:payload
        }
    case TAG_FAILED:
        return{
            ...state,
            loader:false,
            tags:[],
            error:payload
        }   
      case TAG_CREATE:
        return{
            ...state,
            loader:false,
            tags:[...state.tags,payload],
            error:payload
        
        }
     
    case TAG_EDIT :
        state.tags[state.tags.findIndex((data)=> data._id ===payload._id)]=payload
  
  
          return{
              ...state,
              loader:false,
              tags: state.tags,
              error:''
          }

          case TAG_DELETE:
            return{
                ...state,
                loader:false,
                
                tags:state.tags.filter((data) => data._id !== payload.Tag._id),
                error:''
            }

    default:
        return state
}


}


export default ShopReduser;