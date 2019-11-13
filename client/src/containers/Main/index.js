import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>This is main</h1>
            </div>
        )
    }
}

export default Main;