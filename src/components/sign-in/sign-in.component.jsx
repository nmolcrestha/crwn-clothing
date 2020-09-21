import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';

import {signInWithGoogle} from '../../firebase/firebase.util'

import './sign-in.style.scss';

class SignIn extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = event =>{
        event.preventdefault();
        this.setState({email: '', password: ''});
    }

    handelChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span> 

                <form onSubmit={this.handelSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handelChange} 
                        label='email'
                        required
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handelChange}
                        label='password' 
                        required
                    />
                    <div className='buttons'>
                        <CustomBtn type='submit'>Sign In</CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomBtn>
                    </div>
                </form>   
            </div>
        )
    }
}

export default SignIn; 