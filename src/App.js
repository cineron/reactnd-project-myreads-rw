import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';

// import React Router
import { Route } from "react-router-dom";
// import MainPage component
import MainPage from "./MainPage.js";
// import SearchPage component
import SearchPage from "./SearchPage.js";

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ MainPage }/>
        <Route path="/search" component={ SearchPage }/>
      </div>
    )
    //App logic has been moved into MainPage.js, SearchPage.js, Shelf.js, and Book.js
  }
}

export default BooksApp
