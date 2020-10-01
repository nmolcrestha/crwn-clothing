import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toogleCartHidden} from '../../redux/cart/cart.action';

import './cart-icon.style.scss';

const CartIcon = ({toogleCartHidden}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toogleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);