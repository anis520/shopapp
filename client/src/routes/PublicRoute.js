import {createBrowserRouter} from 'react-router-dom'
import Shop from '../pages/Shop/Shop'
import Layouts from '../components/layouts/Layouts';
import Cart from '../pages/Cart/Cart';
import Admin from '../pages/Admin/Admin';



const PublicRoute=createBrowserRouter([



{

    path:'/',
    element:<Layouts/>,
    children:[

       {
        path:"/",
        element:<Shop/>,
       },
       {
        path:"/cart",
        element:<Cart/>,
       },
       {
        path:"/admin",
        element:<Admin/>,
       
       }


    ]
}



])






export default PublicRoute;