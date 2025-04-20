import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItemLocalStorage, removeLocalStorage } from "../../components/utilies/Localstorage";
import BookList from "../BookList/BookList";
import ErrorMessage from "../../components/ErrorMessage";

const ReadList = () => {
  const data = useLoaderData();
  const [readListBooks, setReadListBooks] = useState([]);
  console.log(readListBooks);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const storedData = getItemLocalStorage();
    const convertedStoredData = storedData.map((id) => parseInt(id));
    const readBooks = data.filter((book) =>
      convertedStoredData.includes(book.bookId)
    );
    setReadListBooks(readBooks);
  }, [data]);

  const handleRemoveBtn = id =>{

setReadListBooks(readListBooks.filter(book=>book.bookId !== id))
removeLocalStorage(id)

   

  }
  if(readListBooks < 1) return <ErrorMessage/>

  const handleSort = (type) => {
    setSort(type);
    if (type === "Ratings") {
      const sortedRatings = [...readListBooks].sort(
        (a, b) => a.rating - b.rating
      );
      setReadListBooks(sortedRatings);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold py-6 my-4 bg-gray-300 rounded-2xl text-3xl">
        Books
      </h1>

      <div className="dropdown flex justify-center  py-4 dropdown-bottom dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-green-500 text-white font-bold m-1"
        >
          Sort by: {sort && sort} ⬇️
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => handleSort("pages")}>
            <a>Pages</a>
          </li>
          <li onClick={() => handleSort("Ratings")}>
            <a>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readListBooks.map((book) => (
              <BookList handleRemoveBtn={handleRemoveBtn} key={book.bookId} book={book}></BookList>
            ))}
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
