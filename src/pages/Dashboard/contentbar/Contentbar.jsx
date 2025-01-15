import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import SearchBar from '../../../components/SearchBar';


const Contentbar = () => {
    const {user} = useAuth()
    const [search, setSearch] = useState('');
    console.log(search)

    return (
        <div className='bg-white rounded-lg pb-4 shadow h-[200vh] p-5'>
            {/* search bar  + profile */}
            <SearchBar />

            <Outlet />
        </div>
    );
};

export default Contentbar;