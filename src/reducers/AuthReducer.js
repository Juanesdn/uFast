import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER,
    REGISTER_USER,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    showError: false,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case REGISTER_USER:
            return { ...state, loading: true, showError: false };
        case REGISTER_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case REGISTER_USER_FAILED:
            return { ...state, showError: true, password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, showError: false };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAILED:
            return { ...state, showError: true, password: '', loading: false };
        default:
            return state;
        
    }
};
