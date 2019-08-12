import React from 'react';
import axios from 'axios';
import '../styles/pure-min.css';
export default class Products extends React.Component {

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
                List of Products
                <table>
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
                            products.length ?
                                products.map(product =>
                                    <div key={product.id}>

                                        <tr>
                                            <td>{product.nome}</td>
                                            <td>{product.descricao}</td>
                                            <td>{product.quantidade}</td>
                                            <td>{product.preco}</td>
                                        </tr>
                                    </div>) : null
                        }{
                            errorMsg ? <div>{errorMsg}</div> : null
                        }
                    </tbody>
                </table>

            </div>

        );
    }
}