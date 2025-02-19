import FooterSec from "../components/FooterSec";
import Header from "../components/Header";
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            
            <div className="-mb-16">
                <Header />
            </div>
                <Outlet></Outlet>
            <FooterSec />
        </div>
    );
};

export default MainLayout;