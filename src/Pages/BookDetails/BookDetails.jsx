import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addToLocalStorage } from '../../components/utilies/Localstorage';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const convertIdNumber = parseInt(id);
   
  
    const findOutBook = books.find(
      (singleBook) => singleBook.bookId === convertIdNumber
    );
  
  
  
    const {
      bookId,
      bookName,
      image,
      publisher,
      rating,
      review,
      tags,
      totalPages,
      category,
      yearOfPublishing,
      author,
    } = findOutBook;
    return (
        <div className="hero  min-h-screen py-10">
        <div className="hero-content flex-col gap-16 xl:flex-row">
         <div className='bg-gray-200 w-full  xl:h-[550px] rounded-2xl shadow  xl:w-1/2'>
         <img
            src={image}
            className=" h-[500px] mx-auto p-8 rounded-2xl "
          />
         </div>
          <div className='xl:w-1/2'>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">by: {author}</p>
            <p className="border-t border-b py-2">{category}</p>
            <p>
              <span className="font-bold">Review:</span> {review}
            </p>
            <div className="flex gap-16 border-b py-5">
              <span className="font-bold">Tag</span>
              {tags.map((tag,index) => (
                <p key={index} className="text-green-500 bg-gray-100 rounded-2xl ">{tag}</p>
              ))}
            </div>
            <p>Number of pages: <span className="font-bold">{totalPages}</span></p>
            <p>Publisher: <span className="font-bold">{publisher}</span></p>
            <p>Year of publishing: <span className="font-bold">{yearOfPublishing}</span></p>
            <p>Rating: <span className="font-bold">{rating}</span></p>
            <Link><button onClick={()=>addToLocalStorage(bookId)} className="btn mr-3 ">Read</button></Link>
            <Link><button className="btn btn-accent">WishList</button></Link>
          </div>
        </div>
      </div>
    );
  };
export default BookDetails;