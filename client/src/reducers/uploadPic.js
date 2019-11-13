import { UPLOAD_PICTURE } from './../actions/types';

const INITIAL_STATE = {
    image_url: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPLOAD_PICTURE:
            return {  };
        default:
            return state;
    }
};