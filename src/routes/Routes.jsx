import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home />
            },{
                path:'/contact',
                element:<Contact />
            }
        ]
    },{
        path:'/login',
        element:<Login />
    },{
        path:'/signup',
        element:<SignUp />
    },{
        path:'/dashboard',
        element:<Dashboard />,
        children:[
            {
                
            }
        ]
    }
])
