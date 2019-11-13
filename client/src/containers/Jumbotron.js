import React, { Component } from 'react';
import { connect } from 'react-redux';



class Jumbotron extends Component {
    renderJumbotron() {
        if (!this.props.auth) {
            return (
                <div className="container">
                    <h1 className="display-4">Which celebs looks like you?</h1>
                    <p className="lead">Sign in to get the answer!</p>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <h1 className="display-4">Upload a Photo</h1>
                    <p className="lead">and press submit button.</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                {this.renderJumbotron()}
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Jumbotron);

