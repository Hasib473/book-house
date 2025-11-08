import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookName, author, rating, category,image,bookId } = book || {};
    return (
       <Link to={`/bookDetails/${bookId}`}>
         <div>
            <div className="card bg-base-100 w-96 shadow-sm border">
  <figure>
    <img className='h-[166px] px-[80px] py-[10px] mt-5 bg-gray-300 rounded-xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className='flex justify-between items-center mt-5 px-5'>
    <p className='text-green-400 p-1 bg-gray-200 rounded-xl'>Young Adult</p>
    <p className='text-green-400 p-1 bg-gray-200 rounded-xl'>Identy</p>
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      
    </h2>
    <p className='py-4 border-b-2 border-dotted border-red-900'>By: {author}</p>
    <div className="card-actions flex justify-between items-center mt-2">
      <div className="badge badge-outline">{category}</div>
      <div className="">{rating}⭐</div>
    </div>
  </div>
</div>
        </div>
       </Link>
    );
};

export default Book;