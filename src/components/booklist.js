import React from 'react';
import BookCard from './bookcard'
import '../App.css'


const BookList = (props) => (
        <div className="container-fluid mt-spec">
            <h3 className='text-center p-3 text-pur fw-bold bg-info mb-5'>Search Results</h3>
            <div className='container overflow-auto h-100'>
                <div className='row gx-5'>
                {
                    props.listOfBooks.map((book, i) =>{
                        return(
                            <BookCard 
                                key = {i}
                                img={book.volumeInfo.imageLinks.smallThumbnail}
                                title = {book.volumeInfo.title}
                                author = {book.volumeInfo.authors}
                                published = {book.volumeInfo.publishedDate}
                            />
                        )
                    })
                }
                </div>
            </div>
        </div>
    );


export default  BookList;