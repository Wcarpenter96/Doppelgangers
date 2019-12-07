import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';
import SignUp from './containers/auth/SignUp';
import SignIn from './containers/auth/SignIn';
import SignOut from './containers/auth/SignOut';
import Main from './containers/Main';
import Home from './containers/Home';
import allUsers from './containers/allUsers'



import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducers,
    {
        auth: { authenticated: localStorage.getItem('token')}
    },
    composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/signin' component={SignIn} />   
                <Route exact path='/signout' component={Home}/>
                <Route exact path='/main' component={Main}/>       
                <Route exact path='/' component={Home}/>    
                <Route exact path='/alluser' component={allUsers}/>    
            </App>
        </Router>
    </Provider>
    ,document.getElementById('root'));