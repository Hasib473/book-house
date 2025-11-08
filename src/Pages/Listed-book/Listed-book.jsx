import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilitys/addtoDB';

const ListedBook = () => {
    const [myReadBooks, setMyReadBooks] = useState([]);

    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storeBookData = getStoredBook();
        const ConvertStoredBookData = storeBookData.map(id => parseInt(id));
        const myReadBooks = data.filter(book => ConvertStoredBookData.includes(book.bookId));
        setMyReadBooks(myReadBooks);

    }
        , []);

    return (
        <div>
            <div className='text-center'>
                <p className='text-3xl font-bold text-center
                py-6 mt-3 bg-gray-300 rounded-xl'>Books</p>

                {/* drop down button */}
                <div className="dropdown dropdown-start mt-3">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500">Sort By ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Pages</a></li>
                        <li><a>Rating</a></li>
                    </ul>
                </div>


            </div>
            <div className='mt-5'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Books</Tab>
                    </TabList>

                    <TabPanel>
                        <div>

                            {
                                myReadBooks.map(book => <div key={book.bookId} className='mb-3 p-3 border border-gray-300 rounded-xl'>
                                    <div className='flex justify-baseline gap-10'>
                                        <img className='h-[200px] w-[150px] py-4 px-3 bg-gray-300 rounded-md' src={book.image} alt="" />

                                        <div>
                                            <h1 className='text-2xl font-bold '>{book.bookName}</h1>
                                            <p className='italic'> By: {book.author}</p>
                                            <div className='mt-1  '>
                                                {book.tags.map((tag) => <span className='inline-block bg-gray-200 text-green-500  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded '>#{tag}</span>)}
                                                <h1 className='text-[10px] font-normal mt-1'> 📅 Year of Publishing:  {book.yearOfPublishing}</h1>
                                            </div>
                                            <div className='flex justify-baseline gap-3 py-2 border-b border-gray-200'>
                                                <h1 className='text-[12px] font-bold mt-1.5'>👨🏼‍💼Publisher: {book.publisher}</h1>
                                                <h1 className='text-[12px] font-normal mt-1.5'>📄Pages: {book.totalPages}</h1>
                                            </div>

                                            <div className='flex justify-baseline gap-3 mt-2'>
                                                <h1 className='text-[13px] font-regular p-2 bg-blue-200 text-blue-400 rounded-xl'>Category: {book.category}</h1>
                                                <h1 className='text-[13px] font-regular p-2 bg-orange-200 text-orange-400 rounded-xl'>Rating: {book.rating}</h1>
                                                <h1 className='text-[13px] font-regular p-2 bg-green-700 text-white rounded-xl'>view Details</h1>
                                            </div>
                                        </div>
                                    </div>


                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default ListedBook;