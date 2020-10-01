import React from 'react'
import CustomBtn from '../custom-btn/custom-btn.component'
import './cart-dropdown.style.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
    </div>
);

export default CartDropDown;