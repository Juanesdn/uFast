import {
    PRODUCTS_FETCH_SUCCESS,
    PRODUCT_SELECTED,
    ORDER_DONE,
    UBICATION_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    productos: {},
    producto: '',
    ubicacion: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UBICATION_CHANGED:
            return { ...state, ubicacion: action.payload };
        case ORDER_DONE:
            return { ...state, ...INITIAL_STATE };
        case PRODUCT_SELECTED:
            return { ...state, producto: action.payload };
        case PRODUCTS_FETCH_SUCCESS:
            return { ...state, productos: action.payload };
        default:
            return state;
    }
};
