import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout } from './../../actions';
import Header from './../../containers/Header.js';
import Jumbotron from './../../containers/Jumbotron.js';

class SignOut extends Component {
    componentDidMount() {
        this.props.signout();
    }

    render() {
        return (
        <div>
        <Header/>
        <Jumbotron/>
        <h1 ClassName='text-center'>Sorry to see you go!</h1>
        </div>
        );
    }
}

export default connect(null, { signout })(SignOut);

