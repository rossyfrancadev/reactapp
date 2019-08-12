import React from 'react';
import './styles/pure-min.css';
import axios from 'axios';
import './styles/side-menu.css';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/prjApirest/v1/products',
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => {
                console.log(response)
                this.setState({ products: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })
            })
    }
    render() {
        return (
            <div id="layout">
                <div >
                    <a href="#menu" id="menulink" className="menuLink">
                        <span></span>
                    </a>
                    <div id="menu">
                        <div className="pure-menu">
                            <a className="pure-menu-heading" href="#">BAR WEB</a>

                            <ul className="pure-menu-list">
                                <li className="pure-menu-item "><a href="#" className="pure-menu-link ">Home</a></li>
                                <li className="pure-menu-item menu-item-divided ">
                                    <a href="#" className="pure-menu-link">Products</a>
                                </li>
                                <li className="pure-menu-item menu-item-divided"><a href="#" className="pure-menu-link ">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="main">
                    <div className="header">
                        <h1>Products</h1>
                        <h2>A subtitle for your page goes here</h2>

                        <div className="content" id="content">
                            <div className="pure-form pure-form-aligned">
                                <form className="pure-form pure-form-aligned">
                                    <div className="pure-control-group">
                                        <label htmlFor="nome">Nome</label>
                                        <input id="nome" type="text" name="nome" />
                                    </div>
                                    <div className="pure-control-group">
                                        <label htmlFor="descricao">Descrição</label>
                                        <input id="descricao" type="text" name="descricao" />
                                    </div>
                                    <div className="pure-control-group">
                                        <label htmlFor="quantidade">Quantidade</label>
                                        <input id="quantidade" type="number" name="quantidade" />
                                    </div>
                                    <div className="pure-control-group">
                                        <label htmlFor="preco">Preço</label>
                                        <input id="preco" type="text" name="preco" />
                                    </div>
                                    <div className="pure-control-group">
                                        <label></label>
                                        <button type="submit" className="pure-button pure-button-primary">Inserir</button>
                                    </div>
                                </form>
                            </div>
                            <div id="main">
                                <table className="pure-table">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th>Quantidade</th>
                                            <th>Preço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.products.map((product) => {
                                                return (

                                                    <tr key={product.id}>
                                                        <td>{product.nome}</td>
                                                        <td>{product.descricao}</td>
                                                        <td>{product.quantidade}</td>
                                                        <td>{product.precoVenda}</td>
                                                    </tr>
                                                )
                                            })
                                        }



                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

