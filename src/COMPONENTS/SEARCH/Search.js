import React from "react";
import * as BooksAPI from '../../APIS/BooksAPI';
//import React Router Link
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import Book from "../BOOK/Book.js";

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            results: [],
            query: ""
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

    updateQuery = (query) => {
        this.setState({query: query}, this.submitSearch);
    };

    submitSearch(){
        if(this.state.query === "" || this.state.query === undefined){
            return this.setState({results: [] });
        }
        BooksAPI.search(this.state.query.trim())
        .then(res => {
            // console.log(res);
            if(res.error) {
                return this.setState({ results: [] });
            } else {
                res.forEach(b => {
                    let f = this.state.books.filter(B => B.id === b.id);
                    // console.log(f);
                    b.shelf = f[0] ? f[0].shelf : null;    
                });
                return this.setState({ results: res });
            }
        })
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(resp => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book])
            }));
        });
    };

    render(){
        return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link 
                to="/"
                className="close-search"
                >Close</Link>
                <div className="search-books-input-wrapper">
                
                    <DebounceInput 
                        type="text" 
                        placeholder="Search by title or author" 
                        minLength={2}
                        debounceTimeout={300}
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value) }
                    />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key} />)}
                </ol>
            </div>
        </div>
        )
    }
}

export default Search;