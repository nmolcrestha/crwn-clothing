import React from 'react';

import {connect} from 'react-redux';

import './collection-item.style.scss';
import CustomBtn from '../custom-btn/custom-btn.component';
import {addItem} from '../../redux/cart/cart.action';

const CollectionItem = ({item, addItem }) => {
    const { name, imageUrl, price} = item;
    return(
    <div className='collection-item'>
        <div 
            className='image'
            style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomBtn onClick={()=> addItem(item)} inverted>ADD TO CART</CustomBtn>

    </div>
)};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);