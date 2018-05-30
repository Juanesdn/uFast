import firebase from 'firebase';
import {
    PRODUCTS_FETCH_SUCCESS
} from './types';

export const fetchProducts = () => {
    return (dispatch) => {
        firebase.database().ref('/inventario')
            .on('value', data => {
                dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data.val() });
            });
    };
};
