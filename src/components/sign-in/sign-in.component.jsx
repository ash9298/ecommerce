import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {

    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })

    }

    handleChange = event => {
        console.log(this.state)
        const { name, value } = event.target;

        this.setState({ [name]: value })
        console.log(this.state)
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton 
                        type="button"
                    >
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;