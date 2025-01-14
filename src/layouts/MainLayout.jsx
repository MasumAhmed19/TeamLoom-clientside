import Footer from "../components/Footer";
import Header from "../components/Header";
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <Header />
                <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;