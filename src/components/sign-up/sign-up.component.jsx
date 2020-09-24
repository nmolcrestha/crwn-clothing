import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';

import './sign-up.style.scss'

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Password doesn't match!");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }catch(error){
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required 
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='E-Mail'
                        required 
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required 
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required 
                    />
                    <CustomBtn type='submit'>SIGN UP</CustomBtn>
                </form>

            </div>
        )
    }
}
    


export default SignUp;