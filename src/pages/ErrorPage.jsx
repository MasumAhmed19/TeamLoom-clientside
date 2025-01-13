import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='container mx-auto items-center justify-center'>
            <h2>Error</h2>
            <Link to='/'>back to home</Link>
            
        </div>
    );
};

export default ErrorPage;
