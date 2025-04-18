
import React, { useEffect, useState} from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getItemLocalStorage } from '../../components/utilies/Localstorage';
import BookList from '../BookList/BookList';

const ReadList = () => {
    const data = useLoaderData()
    const [readListBooks , setReadListBooks] = useState([])
    useEffect(()=>{
        const storedData = getItemLocalStorage()
         const convertedStoredData = storedData.map(id => parseInt(id));
        const readBooks = data.filter(book=>convertedStoredData.includes(book.bookId));
        setReadListBooks(readBooks);
    },[data])
    console.log(readListBooks);
    
    return (
        <div>
            <h1 className='text-center font-bold py-6 my-4 bg-gray-300 rounded-2xl text-3xl'>Books</h1>
             <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
    <div>
        {
           readListBooks.map(book=><BookList key={book.bookId} book={book}></BookList>) 
        }
    </div>

    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;
