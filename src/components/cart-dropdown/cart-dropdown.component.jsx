import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomBtn from '../custom-btn/custom-btn.component'
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';


const CartDropDown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { cartItems.length ? (cartItems.map(cartItem => 
            <CartItem 
            key={cartItem.id}
            item={cartItem} />)) : (
                <span className='empty-message'>Your Cart is Empty.</span>
            )
            }
        </div>
        <CustomBtn onClick={()=>history.push('/checkout')}>GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));