import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Jumbotron.css';




class Jumbotron extends Component {
    renderJumbotron() {
        if (!this.props.auth) {
            return (
                <div className="container">
                    <h1 className="display-3 text-center">Which celebs looks like you?</h1>
                    <p className="display-6 text-center">Hover Your Mouse On the Faces Below!!!</p>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <h1 className="display-3 text-center">Upload a Photo</h1>
                    <p className="display-6 text-center">and press submit button.</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="jumbotron jumbotron-fluid shadow-lg p-3 bg-white rounded">
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

