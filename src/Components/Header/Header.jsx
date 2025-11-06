import React from 'react';
import haderImg from '../../assets/boi.jpg';

const Header = () => {
    return (
        <div className='md:flex  justify-between mt-6 items-center p-5 shadow-[0_4px_10px_rgba(0,0,0,0.1) ]'>
            <div >
                <h1 className='text-5xl font-bold text-green-400'>Books to <br /> <span className='text-black'>Frees up  your Bookshelf</span></h1>
                <button className='btn mt-4 bg-green-400 text-white'>View the list</button>
            </div>
            <img className='w-[300px]' src={haderImg} alt="Header Image" />
            
            
        </div>
    );
};

export default Header;