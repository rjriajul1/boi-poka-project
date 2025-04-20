import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router";


const BookList = ({ book,handleRemoveBtn }) => {
  const {
    bookId,
    bookName,
    publisher,
    author,
    category,
    image,
    yearOfPublishing,
    tags,
    rating,
    totalPages,
  } = book;
  return (
   <div>
     <div className="flex items-center rounded-2xl border my-8 border-gray-400 gap-7 p-4">
    
    <div className="bg-gray-200 p-4 rounded-2xl">
      <img className="w-20 rounded-2xl" src={image} alt="" />
    </div>
    <div>
      <h1 className="font-bold text-xl">{bookName}</h1>
      <p className="py-3">By: {author}</p>
      <div className="flex gap-8 py-2">
          <p className="font-bold">Tag</p>
        {tags.map((tag, index) => (
          <p key={index} className="text-green-500 bg-gray-200 rounded-2xl px-2 font-bold">{tag}</p>
        ))}
        <p className="flex items-center gap-2 text-gray-500"><FaLocationDot/>Year of Publishing {yearOfPublishing}</p>
      </div>
     <div className="flex items-center text-gray-500 gap-6">
     <p className="flex items-center gap-2 py-2"><FcBusinessman/>Publisher: {publisher}</p>
     <p className="flex items-center gap-2"><MdContactPage/>Page: {totalPages}</p>
     </div>
     <div className="flex gap-4 border-t border-gray-300  ">
      <h4 className="btn mt-2">Category: {category}</h4>
      <h4 className="btn mt-2">Category: {rating}</h4>
     <Link to={`/bookDetails/${bookId}`}> <button className="btn mt-2 btn-success">View Details</button></Link>
     <button onClick={()=>handleRemoveBtn(bookId)} className="btn btn-error mt-2">Remove</button>
     </div>
     
    </div>
  </div>
   </div>
  );
};

export default BookList;
