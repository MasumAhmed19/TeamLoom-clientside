import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard'
import PrivateRoute from '../routes/PrivateRoute'
import Profile from '../pages/Dashboard/contentbar/Profile'
import Task from '../pages/Dashboard/contentbar/Task'
import PaymentHistory from '../pages/Dashboard/contentbar/PaymentHistory'
import Notifications from '../pages/Dashboard/contentbar/Notifications'
import EmployeList from '../pages/Dashboard/contentbar/EmployeList'
import Progress from '../pages/Dashboard/contentbar/Progress'
import Payroll from '../pages/Dashboard/contentbar/Payroll'

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
        element:<PrivateRoute><Dashboard /></PrivateRoute> ,
        children:[
            {   
                // admin + hr + employee
                path:'/dashboard/profile',
                element:<Profile /> 
            },{
                // employee
                path:'/dashboard/task',
                element:<Task />
            },{
                // admin + hr 
                path:'/dashboard/payment-history',
                element:<PaymentHistory />
            },{
                // admin + hr + employee
                path:'/dashboard/notifications',
                element:<Notifications  />
            },{
                // admin + hr 
                path:'/dashboard/employee-list',
                element:<EmployeList  />
            },{
                // hr 
                path:'/dashboard/progress',
                element:<Progress /> 
            },{
                // admin
                path:'/dashboard/payroll',
                element:<Payroll  />

            }
        ]
    }
])
