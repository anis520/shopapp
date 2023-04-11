import { RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getallBrands } from "./redux/ShopReduser/Action";

  
function App() {
 
const dispatch= useDispatch()


 useEffect(() => {
 
  dispatch(getallBrands())
  
  


 },[dispatch])
 
 
 
  return (
 
<>

<RouterProvider  router={PublicRoute}/>

</>
  
  );
}

export default App;
