import { Outlet } from "react-router-dom";

const MainLayout = () => {
    
    return(
        <div>
            <nav>Barra nav</nav>
            <Outlet/>
            <footer>Footer</footer>
        </div>
    )
}

export default MainLayout