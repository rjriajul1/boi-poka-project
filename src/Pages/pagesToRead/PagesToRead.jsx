import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const PagesToRead = () => {
    const data = useLoaderData()
  
    return (
        <div className='flex justify-center py-6'>
            <BarChart width={900} height={700} data={data}>
               <XAxis dataKey={'bookName'}></XAxis>
               <YAxis/>
               <Tooltip/>
                <Bar dataKey={'totalPages'} fill="#8884d8"></Bar>

            </BarChart>
        </div>
    );
};

export default PagesToRead;