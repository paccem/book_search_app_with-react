import React from 'react';
import BookList from './booklist';
import SearchBar from './searchBar';

class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            searchField:'',
            sort:''
        }
        // this.handleInput= this.handleInput.bind(this)
        // this.searchBook= this.searchBook.bind(this)
        // this.cleanData = this.cleanData.bind(this)
    }
    handleInput =(e)=>{
        this.setState({searchField: e.target.value})
    }

    componentWillMount(){
        const topBooks = 'top books'
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${topBooks}`)
        .then(res => res.json())
        .then(listBooks => {
            const cleanedData = this.cleanData(listBooks)
            this.setState({data : cleanedData})
            console.log(this.state.data)
        })
    }

    searchBook=(e)=>{
        e.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`)
        .then(res => res.json())
        .then(listBooks => {
            const cleanedData = this.cleanData(listBooks)
            this.setState({data : cleanedData})
            console.log(this.state.data)
        })
    }
    cleanData=(data)=>{
        const cleanedData = data.items.map((book)=>{
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
                book.volumeInfo['publishedDate'] ='0000';
            }else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo['imageLinks'] = {smallThumbnail: './no_image.png'};
            }
            return book;
        })
        return cleanedData;
    }
    handleSort=(e)=>{
        this.setState({sort: e.target.value})
    }
    



    render(){
        const sortedBooks = this.state.data.sort((a, b) => {
            if ((this.state.sort) === 'newest'){
                return parseInt(b.volumeInfo.publishedDate.substring(0,4))-parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }else if  ((this.state.sort) === 'oldest'){
                return parseInt(a.volumeInfo.publishedDate.substring(0,4))-parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        })

        return (
            <div>
                <SearchBar handleInput={this.handleInput} searchBook={this.searchBook} handleSort={this.handleSort} />
                <BookList listOfBooks ={sortedBooks}/>
            </div>
        )
    }
}
export default Book;