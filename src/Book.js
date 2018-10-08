import React from "react";
//import React Router Link
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        book: props.book
    }
  }

  componentDidMount(){
    console.log(this);
  }

  updateBook(shelf){
    BooksAPI.update(this.state.book, shelf)
    .then(resp => {
      this.setState(state => {
        let copy = state.book;
        copy.shelf = shelf;
        this.setState({ book : copy });
      } )
    })
  }

    render() {
        return(
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.state.book.imageLinks && this.state.book.imageLinks.thumbnail} || ''")` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.state.book.shelf || 'none'} onChange= {(e) => {
                    this.updateBook(e.target.value)
                    }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.state.book.title}t</div>
              <div className="book-authors">{this.state.book.authors[0] || "No author on file."}</div>
            </div>
          </li>
        )
    }
}

export default Book;