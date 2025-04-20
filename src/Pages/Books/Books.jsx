import { useLoaderData } from "react-router";
import Book from "../Book/Book";
import { useEffect, useState } from "react";


const Books = () => {
  const data = useLoaderData();
  const [allBook,setAllBook] = useState([]);
  const [showAll,setShowAll] = useState(false)

  useEffect(()=>{
    if(showAll){
      setAllBook(data)
    }else{
      setAllBook(data.slice(0,6))
    }
  },[data,showAll])

  return (
    <div className="">
      <h1 className="font-bold text-4xl text-center py-10">Books</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {allBook.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>

      <button onClick={()=>{
        setShowAll(!showAll)
        if(showAll)return window.scrollTo(0,400)
         
      }}  className="btn btn-success font-bold m-4 text-white">{showAll? 'Show Less':'Show All'}</button>
     
    </div>
  );
};

export default Books;
