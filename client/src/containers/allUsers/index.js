import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from './../../actions';
import Header from './../../containers/Header.js';
import Jumbotron from './../../containers/Jumbotron.js';
import Cards from './../../containers/Cards.js';

class allUsers extends Component {
    render() {

        return (
            <div>
            <Header/>
            <Jumbotron/>
            <h1 className='text-center'>All Users</h1>
                    <br></br>
                    <br></br>
                    <hr />
                    <br></br>
                    <br></br>
            <div className="row">
            <div className='col-md-2'></div>
            <div className='col-md-10'>
            <Cards/>
            </div>
            <div className='col-md-2'></div>
            </div>
            <br/>
            <br/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, { signIn }),
)(allUsers);