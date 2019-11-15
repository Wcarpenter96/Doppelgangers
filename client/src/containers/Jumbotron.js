import React, { Component } from 'react';
import { connect } from 'react-redux';


import './Jumbotron.css';




class Jumbotron extends Component {
    renderJumbotron() {
        if (!this.props.auth) {
            return (
                <div className="container">
                    <h1 className="display-3 text-center">Which Celebs Looks Like You?</h1>
                    <p className="display-6 text-center">Please Sign In or Sign Up!</p>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <h1 className="display-3 text-center">See Similar Faces</h1>
                    <p className="display-6 text-center">Good Luck!!!</p>
                </div>
            );
        }
    }

    render() {
        return (
                <div className='jumbotron jumbotron-fluid'>
                <div className="jumbotron shadow-lg bg-white rounded">
                    {this.renderJumbotron()}
                </div>
                </div>
            
        )
    }
}


function mapStateToProps({ auth }) {
    return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Jumbotron);

