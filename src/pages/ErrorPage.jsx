import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='bg-gradient-to-br from-zinc-700 to-gray-900'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <div className=''>
                        <img src="https://i.ibb.co.com/DgnKY6t/giphy.webp" alt="" className='w-3/4 mx-auto' />
                    </div>
                    <div className=' text-white flex flex-col gap-5 text-center justify-center'>
                        <h2 className='f2 text-6xl'>404! Error</h2>
                        <p>Whoops! That page doesn’t exist.</p>
                        <div>
                            <Link to='/' className='btn1'>back to home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
