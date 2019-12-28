import React from 'react';
import './ItemPagination.css';

class ItemPagination extends React.Component {

    constructor(props) {
        super(props);

        const pageNumbers = [];

        for(let i = 0 ; i < this.props.pages ; i++){
            pageNumbers.push(i+1);
        }

        this.state = { pageNumbers };
    }

    componentWillUnmount() {
        this.setState({ pageNumbers: [] });
    }

    renderPage() {
        return this.state.pageNumbers.map( (pageNumber,i) => {
            if(pageNumber === 1)
                return <li className='active' key={i}>{pageNumber}</li>
            else
                return <li key={i}>{pageNumber}</li>
        });
    }

    render() {
        return (
            <div className='item-pagination'>
                <ul>
                    {this.renderPage()}
                    <li>></li>
                </ul>
            </div>
        );
    }
}

export default ItemPagination;