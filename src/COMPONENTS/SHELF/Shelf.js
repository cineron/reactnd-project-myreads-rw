import React from "react";
import Book from "../BOOK";

const Shelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.name}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map((book, key) => 
                    <Book updateBook={props.updateBook} book={book} key={key} />
                )}
            </ol>
        </div>
    </div>
)

export default Shelf;












