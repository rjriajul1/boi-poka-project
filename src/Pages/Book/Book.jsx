import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";


const Book = ({ book }) => {

  const { bookName, author, category, image, yearOfPublishing, tags,rating,bookId } = book;
  return (
  <Link to={`/BookDetails/${bookId}`}>

<div className="card bg-base-100  shadow-sm">
      <figure className="bg-gray-200 w-5/6 rounded-2xl  mx-auto p-4">
        <img className="h-40 object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="flex gap-16 px-5 font-bold mt-3">
        {tags.map((tag,index) => (
          <p key={index} className="bg-green-50 p-2 font-bold rounded-2xl text-green-500">{tag}</p>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>By: {author}</p>
      </div>
      <div className="flex justify-between border-t-2 border-dashed border-gray-300 px-5 py-3">
        <h3>{category}</h3>
        <p className="flex items-center font-bold gap-3">{rating}<FaStarHalfAlt />
         </p>
      </div>
    </div>
  </Link>
  );
};

export default Book;
