import React from 'react';

const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail">
      <div className="close-btn" onClick={onClose}>
        <h3 className='text-white'>Close</h3>
      </div>
      <img className='flex justify-center flex-wrap' src={book.imageLinks.thumbnail} alt={book.title} />
      <h2 className='text-white'>{book.title}</h2>
      <p className='text-white'>{book.description}</p><br />
      <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
        <h2 className='text-white'>Read Now</h2>
      </a><br />
      <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
      <h2 className='text-white'>More Info</h2>
      </a>
    </div>
  );
};

export default BookDetail;
