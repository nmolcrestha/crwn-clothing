import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CustomBtn from '../custom-btn/custom-btn.component'
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem => 
            <CartItem 
            key={cartItem.id}
            item={cartItem} />)}
        </div>
        <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown);