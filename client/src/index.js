import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import SignUp from './containers/auth/SignUp';
import SignIn from './containers/auth/SignIn';
import SignOut from './containers/auth/SignOut';
import Main from './containers/Main';


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
                <Route exact path='/signout' component={SignOut}/>
                <Route exact path='/main' component={Main}/>    
            </App>
        </Router>
    </Provider>
    ,document.getElementById('root'));