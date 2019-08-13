import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import SignUpPage from './pages/signup/signUp';
import ProductsPage from './pages/products/products';
import SignInPage from './pages/signin/signIn';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                   props.history.push("/")
                )
        }
    />
);


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/products" component={ProductsPage} />
            <PrivateRoute path="/app" component={() => <h1>App</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;