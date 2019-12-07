import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from './../../actions';
import SignIn from '../../components/SignIn';

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    };
}

export default compose(
    connect(mapStateToProps, { signIn }),
    reduxForm({ form: 'signin' })
)(SignIn);