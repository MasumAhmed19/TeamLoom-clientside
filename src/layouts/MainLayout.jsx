import FooterSec from "../components/FooterSec";
import Header from "../components/Header";
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <Header />
                <Outlet></Outlet>
            <FooterSec />
        </div>
    );
};

export default MainLayout;