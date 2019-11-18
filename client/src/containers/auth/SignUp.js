import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { signup } from './../../actions';
import Header from './../../containers/Header.js';
import Jumbotron from './../../containers/Jumbotron.js';

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
            <div>
            <Header/>
            <Jumbotron/>
            <h1 className='text-center'>Sign Up Below</h1>
                    <br></br>
                    <br></br>
                    <hr />
                    <br></br>
                    <br></br>
            <div className="row">
            <div className='col-md-2'></div>
            <div className='col-md-2'>
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
                        <button type="submit" className="btn btn-warning">Sign up</button>
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


// export default  connect(mapStateToProps, {signup})(reduxForm({ form: 'signup' })(SignUp));
//  HOC
export default compose(
    connect(mapStateToProps, { signup }),
    reduxForm({ form: 'signup' })
)(SignUp);
