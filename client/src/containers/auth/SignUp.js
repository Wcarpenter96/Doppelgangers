import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { signup } from './../../actions';

class SignUp extends Component {
    onSubmit = formProps => {
        console.log(formProps);
        this.props.signup(formProps, () => {
            this.props.history.push('/Main');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        // console.log(this.props);
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h1 className="offset-md-2">Sign up</h1>
                <div className="form-group row">
                    <fieldset className="offset-md-2">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col">
                            <Field
                                name='email'
                                type='text'
                                component='input'
                                autoComplete='none'
                            />
                        </div>
                    </fieldset>
                </div>

                <div className="form-group row">
                    <fieldset className="offset-md-2">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col">
                            <Field
                                name='password'
                                type='password'
                                component='input'
                                autoComplete='none'
                            />
                        </div>
                    </fieldset>
                </div>

                <div className="alert alert-danger" role="alert" style={{ opacity: this.props.errorMessage ? 1 : 0, marginBottom: 10 }}>
                    <div className="offset-md-2">{this.props.errorMessage}</div>
                </div>

                <div className="form-group row">
                    <div className="col offset-md-2">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}


// export default  connect(mapStateToProps, {signup})(reduxForm({ form: 'signup' })(SignUp));
//  HOC
export default compose(
    connect(mapStateToProps, { signup }),
    reduxForm({ form: 'signup' })
)(SignUp);
