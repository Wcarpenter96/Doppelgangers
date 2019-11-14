import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from './../../containers/Header.js';
import Jumbotron from './../../containers/Jumbotron.js';


class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <h1>This is main</h1>
            </div>
        )
    }
}

export default Main;