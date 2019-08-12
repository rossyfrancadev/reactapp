import React from 'react';
import '../styles/pure-min.css';
import axios from 'axios';

import Products from '../components/Poducts';

export default class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            errorMsg: ''
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
        const { products, errorMsg } = this.state
        return (
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
                            List of Products
                <table className="pure-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Quantidade</th>
                                        <th>Preço</th>
                                    </tr>
                                </thead>


                                {
                                    products.length ?
                                        products.map(product =>
                                            <div key={product.id}>
                                                <tbody>
                                                    <tr>
                                                        <td>{product.nome}</td>
                                                        <td>{product.descricao}</td>
                                                        <td>{product.quantidade}</td>
                                                        <td>{product.preco}</td>
                                                    </tr>
                                                </tbody>
                                            </div>) : null
                                }{
                                    errorMsg ? <div>{errorMsg}</div> : null
                                }



                            </table>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}