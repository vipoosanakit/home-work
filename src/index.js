import React from 'react';
import ReactDOM from 'react-dom';
import Item from './items/Item';
import ItemPagination from './items/ItemPagination';
import mock_data from './data/list.json';
import './index.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className='item-count'>
                    Items 1-{mock_data.length } of 23
                </div>
                <hr />
                <div className = 'item-container'>
                    {
                        mock_data.map( item => {
                            return (
                                <Item itemDetail = { item } key = { item.id }/>
                            )
                        })
                    }
                </div>
                <div>
                    <ItemPagination pages={2}/>
                </div>
                <hr />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));