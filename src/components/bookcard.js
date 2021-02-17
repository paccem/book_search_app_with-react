import React from 'react';
import '../App.css'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookCard=(props)=>{
    return (
        <div className='col-md-3 rounded'>
            <div className='card h-75 card-sty text-pur text-white shadow-lg bg-primary border-0'>
                <img src={props.img} alt='' className='img-fluid' />
                <div className='card-body '>
                    <h6 className='card-title'>{props.title}</h6>
                    <p className='card-text'>Author : <span>{props.author}</span></p>
                    <p className='card-text'>Published : {props.published === '0000' ? 'Not Available' : props.published.substring(0,4)}</p>
                </div>
                <div class="card-footer bg-transparent text-center my-2">
                    <button className="btn btn-outline-light">more info <FontAwesomeIcon icon={faArrowRight} className='ml-2'></FontAwesomeIcon>
                    </button>
                </div>
            </div> 
        </div>
    );
}
export default BookCard;
    
