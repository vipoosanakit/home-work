import React from 'react';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import './Item.css';

const Item = (props) => {

    const { id, title, vote, image_url, price } = props.itemDetail;
    const created_at = moment(props.itemDetail.created_at).format();

    const getDiffInWeek = (created_date) => {
        return moment().diff(created_date, 'week');
    }

    const getDisplayPrice = (price) => {
        return parseFloat(price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div key={id} className="item-card">
            <img alt = '' src = {image_url} />
            <br/>
            <div className = 'item-title'>{title}</div>
            <br />
            <div className = 'item-created-date'>{ getDiffInWeek(created_at) } weeks ago</div>
            <br/>
            <StarRatings
                rating={vote}
                starRatedColor="red"
                numberOfStars={5}
                name='rating'
                starDimension="25px"
                className='start-ratings'
            />
            <br/>
            <div className = 'item-price'>${getDisplayPrice(price)}</div>
        </div>
    );
}


export default Item;