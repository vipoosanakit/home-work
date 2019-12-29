import React from 'react';
import './ItemPagination.css';

const ItemPagination = (props) => {
    const pageNumbers = [];

    for(let i = 0 ; i < props.pages ; i++){
        pageNumbers.push(i+1);
    }

    return (
        <div className='item-pagination'>
            <ul>
                {
                    pageNumbers.map( (pageNumber,i) => {
                        if(pageNumber === 1)
                            return <li className='active' key={i}>{pageNumber}</li>
                        else
                            return <li key={i}>{pageNumber}</li>
                    })
                }
                <li>></li>
            </ul>
        </div>
    );
}

export default ItemPagination;