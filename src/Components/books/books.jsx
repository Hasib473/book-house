import React from 'react';
import Book from '../book/book';

const Books = ({ booksData }) => {
    
    return (
        <>

        <div>
            <h1 className='text-2xl font-bold text-center'>Books</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-2 mt-10'>
            {
                booksData.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
        </>
    );
};

export default Books;