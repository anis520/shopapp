import { RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getallBrands, getallProducts, getallTags, getallcatagorys } from "./redux/ShopReduser/Action";

  
function App() {
 
const dispatch= useDispatch()


 useEffect(() => {
 
  dispatch(getallBrands())
  dispatch(getallcatagorys())
  dispatch(getallTags())
  dispatch(getallProducts())
  
  


 },[dispatch])
 
 
  
  return (
 
<>

<RouterProvider  router={PublicRoute}/>

</>
  
  );
}

export default App;
