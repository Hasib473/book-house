import React from 'react';
import Header from '../../Components/Header/Header';
import { useLoaderData } from 'react-router';
import Books from '../../Components/books/books';

const Home = () => {
    const booksData = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Books booksData={booksData}></Books>
        </div>
    );
};

      

export default Home;