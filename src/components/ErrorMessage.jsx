import React from 'react';
import { RiSignalWifiErrorFill } from "react-icons/ri";

const ErrorMessage = () => {
    return (
       <div className='pt-40'>
         <div className='w-1/3 flex flex-col items-center bg-gray-300 rounded-2xl mx-auto shadow p-2'>
              <RiSignalWifiErrorFill size={40} color='red'/>
              <h1 className='font-thin py-3 text-2xl text-center'>Oops! Something went wrong while processing your request. Please try again later.</h1>
              <button className='btn btn-error text-white font-bold my-6'>Try Again</button>

        </div>
       </div>
    );
};

export default ErrorMessage;