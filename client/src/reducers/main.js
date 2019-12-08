import { UPLOAD_PICTURE, UPLOAD_PICTURE_ERROR, DATA, DATA_ERROR } from './../actions/types';
import image from './../images/default.jpg'

const INITIAL_STATE = {
    image_url: image,
    matches: [],
    errorMessage: '',
    data: {}
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
        case DATA:
            return { ...state, data: action.payload.user, matches: action.payload.celebs, image_url: action.payload.url };
        case DATA_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};