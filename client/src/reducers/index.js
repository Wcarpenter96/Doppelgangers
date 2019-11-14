import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import main from './main';

export default combineReducers({
    auth,
    main,
    form: formReducer
});
