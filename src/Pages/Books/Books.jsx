
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    const books = useLoaderData()

    return (
        <div>
            
            <h1 className='font-bold text-4xl text-center py-10'>Books</h1>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
           {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
           </div>

        </div>
    );
};

export default Books;