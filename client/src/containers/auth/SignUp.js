import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SignUp from "../../components/SignUp";
import { signUp } from './../../actions';

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, { signUp }),
    reduxForm({ form: 'signup' })
)(SignUp);