import React from "react";
import "./App.css";
function Object() {
  const initState = {
    books: [
      {
        id: 1,
        title: "مقدمة ابن خلدون ",
        author: "ابن خلدون ",
        isbn: "1289499030",
      },
      {
        id: 2,
        title: "الحاوي في الطب ",
        author: "ابو بكر الرازي ",
        isbn: "893847239479",
      },
      {
        id: 3,
        title: "الحاوي في الطب ",
        author: "ابو بكر الرازي ",
        isbn: "893847239479",
      },
      {
        id: 4,
        title: "الحاوي في الطب ",
        author: "ابو بكر الرازي ",
        isbn: "893847239479",
      },
      {
        id: 5,
        title: "الحاوي في الطب ",
        author: "ابو بكر الرازي ",
        isbn: "893847239479",
      },
      {
        id: 6,
        title: "الحاوي في الطب ",
        author: "ابو بكر الرازي ",
        isbn: "893847239479",
      },
    ],
  };
  return (
    <div>
      <h1>This is card</h1>
      <div className="card-container">
        {initState.books.map((book) => (
          <div className="card" key={book.id}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Object;
