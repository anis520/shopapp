import {createBrowserRouter} from 'react-router-dom'
import Shop from '../pages/Shop/Shop'
import Layouts from '../components/layouts/Layouts';
import Cart from '../pages/Cart/Cart';
import Admin from '../pages/Admin/Admin';
import Home from '../pages/home/Home';
import SingleProjuct from '../pages/ShingleProjuct/SingleProjuct';
import Login from '../pages/Login/Login';
import Regester from '../pages/Regester/Regester';
import Dashbord from '../pages/Admin/subcomponents/Dashbord';
import { Products } from '../pages/Admin/subcomponents/Products';
import Brands from '../pages/Admin/subcomponents/Brands';
import Tags from '../pages/Admin/subcomponents/Tags';
import Categorys from '../pages/Admin/subcomponents/Categorys';



const PublicRoute=createBrowserRouter([



{

    path:'/',
    element:<Layouts/>,
    children:[

       {
        path:"/",
        element:<Home/>,
       },
       {
        path:"/cart",
        element:<Cart/>,
       },
       {
        path:"/admin",
        element:<Admin/>,
        children:[
            {
               index:true
                ,element:<Dashbord/>
            },
            {
                path:"dash"
                ,element:<Dashbord/>
            },
            {
                path:"products"
                ,element:<Products/>
            }
            ,
            {
                path:"tags"
                ,element:<Tags/>
            }
            ,
            {
                path:"categorys"
                ,element:<Categorys/>
            }
            ,
            {
                path:"brands"
                ,element:<Brands/>
            }
        ]
       
       },
       {
        path:"/shop",
        element:<Shop/>,
       
       }
       ,
       {
        path:"/:id",
        element:<SingleProjuct/>,
       
       }
       ,
       {
        path:"/login",
        element:<Login/>,
       
       }
       ,
       {
        path:"/regester",
        element:<Regester/>,
       
       }


    ]
}



])






export default PublicRoute;