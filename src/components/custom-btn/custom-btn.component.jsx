import React from 'react';
import './custom-btn.style.scss';

const CustomBtn = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={ `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button` } {...otherProps}>
        {children}
    </button>

);

export default CustomBtn;