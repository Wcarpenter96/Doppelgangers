import { UPLOAD_PICTURE, UPLOAD_PICTURE_ERROR, TURNOFF_ERROR, DATA, DATA_ERROR } from './../actions/types';
import image from './../containers/images/default.jpg'

const INITIAL_STATE = {
    image_url: image,
    matches: {},
    errorMessage: '',
    data: [],
    data_error: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPLOAD_PICTURE:
            return {
                ...state, image_url: action.payload.url,
                matches: action.payload.matches, errorMessage: ''
            };
        case UPLOAD_PICTURE_ERROR:
            return { ...state, errorMessage: action.payload };
        case TURNOFF_ERROR:
            return { ...state, errorMessage: '' }
        case DATA:
            return { ...state, data: action.payload };
        case DATA_ERROR:
            return { ...state, data_error: action.payload }
        default:
            return state;
    }
};