import React from 'react';
import api from '../../services/api';
import { login } from '../../services/auth';

export default class SignInPage extends React.Component {
    state = {
        email: "",
        password: "",
        error: ""
    }


    signIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha todos os dados" });
        } else {
            try {
                await api.post("users/login", { email, password }).then((response) => {
                    login(response.headers.authorization)
                })

                this.props.history.push("/app");
            } catch (error) {
                console.log(error)
            }
        }
    }


    render() {
        return (
            <div>
                <h1>SignIn</h1>
                <form onSubmit={this.signIn}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                    <input placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
                    <button type="submit">SignIn</button>
                </form>

            </div>
        )
    }

}