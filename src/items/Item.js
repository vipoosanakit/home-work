import React from 'react';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import './Item.css';

const Item = (props) => {

    const { id, title, vote, image_url } = props.itemDetail;
    const created_at = moment(props.itemDetail.created_at).format();
    const price = props.itemDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const getDiffInWeek = (created_date) => {
        return moment().diff(created_date, 'week');
    }

    return (
        <div key={id} className="item-card">
            <img alt = '' src = {image_url} />
            <br/>
            <div className = 'item-text'>{title}</div>
            <br />
            <div className = 'item-text'>{ getDiffInWeek(created_at) } weeks ago</div>
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
            <div className = 'item-price'>${price}</div>
        </div>
    );
}


export default Item;