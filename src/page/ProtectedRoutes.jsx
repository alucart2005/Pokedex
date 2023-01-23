import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'


const ProtectedRoutes = () => {
    const users = useSelector( state => state.username)
    
    if (users !== '') {
        return <Outlet/>
        
    }else{
         return <Navigate to='/'/>
    }
    
   
}
export default ProtectedRoutes
