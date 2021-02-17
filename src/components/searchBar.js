import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Greet from './greet';
import '../App.css'



const SearchBar=(props)=>{
    return(
        <div className="container res_size">
            <Greet />
            <form onSubmit={props.searchBook}>
                <div className="d-md-flex justify-content-center d-sm-block">
                    <div className="col-md-6">
                        <div className='form-group'>
                            <div className="input-group">
                                <input type='text' 
                                placeholder='Search Book Name...' 
                                className='form-control text-pur' 
                                onChange={props.handleInput} />
                                <button className="btn btn-info">
                                    <FontAwesomeIcon icon={faSearch} className='text-light' onClick={props.searchBook} />
                                </button> 
                            </div> 
                        </div>  
                    </div> 
                    <br/> 
                    <div className="px-5 text-pur">
                        <div className='form-group'>
                            <select defaultValue='sort' onChange={props.handleSort} className='form-select' >
                                <option disabled value='sort'>Sort</option>
                                <option value='newest'>Newest</option>
                                <option value='oldest'>Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;