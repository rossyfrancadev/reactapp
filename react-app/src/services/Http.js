import axios from 'axios';

export default class HttpService {

    get() {
        axios.get('http://localhost:8080/prjApirest/v1/products')
            .then(response => {
                console.log(response)
               return response.data
            })
            .catch(error => {
              return  console.log(error)
            })
    }

}