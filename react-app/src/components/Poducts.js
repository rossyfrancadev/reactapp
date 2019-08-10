import React from 'react';
import axios from 'axios';
export default class Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/prjApirest/v1/products')
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
            <div>
                List of Products
                {
                    products.length ?
                        products.map(product =>
                            <div key={product.id}>
                                <lu>
                                    <li>Nome:{product.nome}</li>
                                    <li>   Descrição:{product.descricao}  </li>
                                </lu>
                                
                                {product.quantidade}
                            </div>) : null
                }{
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        );
    }
}