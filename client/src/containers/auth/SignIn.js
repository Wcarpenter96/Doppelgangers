import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from './../../actions';
import Header from './../../containers/Header.js';
import Jumbotron from './../../containers/Jumbotron.js';
// import './SignIn.css'

class SignIn extends Component {
    onSubmit = formProps => {
        console.log(formProps);
        this.props.signIn(formProps, () => {
            this.props.history.push('/Main');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
            <Header/>
            <Jumbotron/>
            <h1 className='text-center'>Sign In Below</h1>
                    <br></br>
                    <br></br>
                    <hr />
                    <br></br>
                    <br></br>
            <div className="row">
            <div className='col-md-2'></div>
            <div className='col-md-2'>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h1 className="offset-md-2">Sign in</h1>
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
                        <button type="submit" className="btn btn-warning">Sign in</button>
                    </div>
                </div>
            </form>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-5 text-center'>
                <img src='https://media.giphy.com/media/dyjL2vi0AocEEE6ZkA/giphy.gif' alt='arrow'/>
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
    reduxForm({ form: 'signin' })
)(SignIn);