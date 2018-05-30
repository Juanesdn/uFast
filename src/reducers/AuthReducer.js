import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER,
    REGISTER_USER,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    NAME_CHANGED,
    TYPE_CHANGED,
    PROFILE_CREATED
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    name: '',
    user: '',
    type: '',
    showError: false,
    loading: false,
    loggedIn: false,
    registered: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_CREATED:
            return { ...state, ...INITIAL_STATE, loggedIn: true };
        case TYPE_CHANGED:
            return { ...state, type: action.payload };
        case NAME_CHANGED:
            return { ...state, name: action.payload };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case REGISTER_USER:
            return { ...state, loading: true, showError: false };
        case REGISTER_USER_SUCCESS:
            return { ...state, user: action.payload, registered: true, loading: false };
        case REGISTER_USER_FAILED:
            return { ...state, showError: true, password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, showError: false };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, loggedIn: true };
        case LOGIN_USER_FAILED:
            return { ...state, showError: true, password: '', loading: false };
        default:
            return state;
        
    }
};
