import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toogleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount  } from '../../redux/cart/cart.selectors';

import './cart-icon.style.scss';

const CartIcon = ({toogleCartHidden, itemCount}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toogleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);