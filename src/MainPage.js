import React from "react";
import * as BooksAPI from './BooksAPI';
import { Link } from "react-router-dom";
import Shelf from "./Shelf.js";


class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then(respBooks => {
            // console.log(respBooks);
            // Not sure I follow this logic from 32min in video
            this.setState({books: respBooks});
        })
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(resp => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book])
            }))
        });
    }


    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf updateBook={this.updateBook} name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")} />
                <Shelf updateBook={this.updateBook} name="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")} />
                <Shelf updateBook={this.updateBook} name="Read" books={this.state.books.filter(b => b.shelf === "read")} />
            </div>
            <div className="open-search">
                {/* clean up links */}
                <Link to="/search">Add a book</Link>
            </div>
            </div>
        )
    }
}

export default MainPage;