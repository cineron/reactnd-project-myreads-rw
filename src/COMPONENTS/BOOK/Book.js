import React from "react";
//import React Router Link
import { Link } from "react-router-dom";
import * as BooksAPI from '../../APIS/BooksAPI';

// class Book extends React.Component {
const Book = (props) => (
    // render() {
        // return(
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${props.book.imageLinks && props.book.imageLinks.thumbnail} || ''")` }}>
                </div>
                <div className="book-shelf-changer">
                  <select value={props.book.shelf || 'none'} onChange= {(e) => {
                    props.updateBook(props.book, e.target.value)
                    }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{props.book.title}</div>
              <div className="book-authors">{(props.book.authors && props.book.authors[0]) || "(no author listed)"}</div>
            </div>
          </li>
        // )
    // }
// }
)

export default Book;