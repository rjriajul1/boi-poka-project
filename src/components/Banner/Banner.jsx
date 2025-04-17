import React from 'react';
import bannerImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex gap-5 items-center justify-around mt-6 bg-gray-300 rounded-2xl p-8'>
            <div>
               <h1 className='md:text-3xl text-xl font-bold py-5'>Books to freshen up your bookshelf</h1>
               <button className='btn font-bold text-white btn-success'>View The List</button>
            </div>
            <div>
                <img className='rounded-4xl' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;