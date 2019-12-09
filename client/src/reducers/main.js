import { UPLOAD_PICTURE, UPLOAD_PICTURE_ERROR, DATA, DATA_ERROR } from './../actions/types';
import defaultImage from './../images/default.jpg'

const INITIAL_STATE = {
    image_url: defaultImage,
    matches: [],
    errorMessage: '',
    data: {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPLOAD_PICTURE:
            return {
                ...state, matches: action.payload.matches, image_url: action.payload.data.url, errorMessage: ''
            };
        case UPLOAD_PICTURE_ERROR:
            return { ...state, errorMessage: action.payload };
        case DATA:
            return { ...state, data: action.payload.user, matches: action.payload.celebs};
        case DATA_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};