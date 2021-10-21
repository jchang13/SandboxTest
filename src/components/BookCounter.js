import React from "react";
import "./BookCounter.css";
const BookCounter = (props) => {
  return (
    <main>
      <h2>{props.library.name}'s Books</h2>
      <button onClick={() => props.refreshBooks()}>Refresh Books</button>
      {props.library.books.map((book) => (
        <div>{book.title}</div>
      ))}
    </main>
  );
};
export default BookCounter;
