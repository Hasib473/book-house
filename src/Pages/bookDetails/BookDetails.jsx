import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId } =useParams();
    const booksId = parseInt(bookId);
    const data = useLoaderData();

    const bookDetails = data.find(book => book.bookId === booksId)
    

    const {bookName, author, image, review, totalPages, category ,tags,publisher,yearOfPublishing,rating} =bookDetails;


    
    
    return (
        
        <div className='grid grid-cols-12 w-11/12 mx-auto mt-5 p-3.5'>
            <div className='bg-gray-300 rounded-xl col-span-5'>
                <img className='h-[564px] w-[425px] p-5 ' src={image} alt="Selected" />

            </div>
            <div className=' col-span-7 p-3 '>
                <h1  className=' text-3xl font-bold'>{bookName}</h1>
                <h1 className='mt-2 text-sm font-bold pb-4 border-b border-gray-400 text-gray-500'>By: {author}</h1>
                <p className='mt-4 text-[12px] font-semibold pb-4 border-b border-gray-400'>{category}</p>

                <p className='text-[14px] font-sm mt-2'> <span className='text-xl font-bold'>Review:</span> {review}</p>

                <div className='mt-2 pb-4 border-b border-gray-400 '>
                    {tags.map((tags) => <span className='inline-block bg-gray-200 text-green-500  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded mt-2'>#{tags}</span>)}
                </div>

                <div className='mt-2'>
                    <p>Number of Pages: <span className='text-sm font-bold'>         {totalPages}</span></p>
                    <p>Year of Publishing: <span className='text-sm font-bold'>         {yearOfPublishing}</span></p>
                    <p>Publisher: <span className='text-sm font-bold'>         {publisher}</span></p>
                    <p>Rating: <span className='text-sm font-bold'>         {rating}</span></p>
                </div>


                <div className='mt-4'>
                    <button className='btn bg-white'>Read</button>
                    <button className='btn ml-2 bg-blue-300 text-white'>Wishlist</button>
                </div>
                
            </div>  
        </div>
        
    );
};

export default BookDetails;