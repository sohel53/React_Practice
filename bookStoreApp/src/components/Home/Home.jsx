import React from 'react'
import { Link, NavLink, UNSAFE_FetchersContext } from 'react-router-dom';
import Book from '../Book';
import BookList from '../BookList';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import BookDetail from '../BookDetail';


export default function Home() {

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchInitialBooks();
  }, []);

  const fetchInitialBooks = async () => {
    try {
      const response1 = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
      );
      const response2 = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes'
      );
      let books1 = await response1.json();
      let books2 = await response2.json();
    //   console.log(books1);
      let data1 = books1.items.map((value) => value.volumeInfo);
      let data2 = books2.items.map((value) => value.volumeInfo);
      setBooks([...data1, ...data2]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      let books1 = response.json();
      const data = books1.items.map((item) => item.volumeInfo);
      setBooks(data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

    return (
        <div className="app"><br />
        <SearchBar onSearch={handleSearch} /><br />
        {selectedBook ? (
        <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />
        ) : (
        <BookList books={books} onBookClick={handleBookClick} />
        )}
        </div>
    );
}
