import React from 'react';
import {connect} from 'react-redux';

import CustomBtn from '../custom-btn/custom-btn.component'
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

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

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);