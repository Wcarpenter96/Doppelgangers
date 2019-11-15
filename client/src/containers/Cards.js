import React, { Component } from 'react';
import { connect } from 'react-redux';




class Cards extends Component {
    renderCards() {
        if (!this.props.auth) {
            return (
                <div className="container">
                    <h1 className="display-3 text-center">Which celebs looks like you?</h1>
                    <p className="display-6 text-center">Please Sign In or Sign Up!</p>
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
                <div className='jumbotron jumbotron-fluid'>
                <div className="jumbotron shadow-lg bg-white rounded">
                    {this.renderCards()}
                </div>
                </div>
            
        )
    }
}


function mapStateToProps({ auth }) {
    return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Cards);

