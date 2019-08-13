import React from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api';
export default class SignUpPage extends React.Component {

    state = {

        email: "",
        password: "",
        error: ""
    };
    signUp = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha todos os dados" });
        } else {
            try {
                await api.post("users/register", { email, password });
                this.props.history.push("/");
            } catch (error) {
                console.log(error)
                this.setState({error:"ocorreu um erro ao registrar"})
            }
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.signUp}>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input type="text"
                        placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                    <input type="text"
                        placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />

                    <button type="submit">SignUp</button>
                    <hr />
                    <Link to="/">SignIn</Link>
                </form>
            </div>

        )
    }



}