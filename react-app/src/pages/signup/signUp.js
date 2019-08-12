import React from 'react'
import { Link } from 'react-router-dom';

export default class SignUpPage extends React.Component {

    state = {

        email: "",
        password: "",
        error: ""
    };
    signUp = e => {
        e.preventDefault();
        alert("register");
    }
    render() {
        return (
            <div>
                <form onSubmit={this.signUp}>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input type="text"
                        placeholder="Email" />
                    <input type="text"
                        placeholder="Password" />

                    <button type="submit">SignUp</button>
                    <hr />
                    <Link to="/">SignIn</Link>
                </form>
            </div>

        )
    }



}