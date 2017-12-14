import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error: '',
        };
    }
    //When the user submits the form the following happens:
    //Prevent a full page refresh with the preventDefault method
    //Assign the email and password to variables
    //Use the Meteor method to login to the page with the login method
    //if there is an error it will throw the error
    onSubmit(e){
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email},password,(err)=>{
            if(err){
                this.setState({error: 'unable to login. check email & password'});
            } else{
                this.setState({error: ''})
            };
        });
    }

    render() {
        return(
            <div>
                <div>
                    <h1>Login Page</h1>              

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button>Login</button>
                    </form>


                    <Link to="/signup">Create Account?</Link>
                </div>
            </div>
        )
    }
}