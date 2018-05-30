import firebase from 'firebase';
import {
    PRODUCTS_FETCH_SUCCESS,
    PRODUCT_SELECTED,
    ORDER_DONE,
    UBICATION_CHANGED
} from './types';

export const fetchProducts = () => {
    return (dispatch) => {
        firebase.database().ref('/inventario')
            .on('value', data => {
                dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data.val() });
            });
    };
};

export const productSelected = (data) => {
    return {
        type: PRODUCT_SELECTED,
        payload: data
    };
};

export const makeOrder = (order, ubicacion) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: ORDER_DONE });
        firebase.database().ref(`/ordenes/${makeid()}`)
            .set({ item: order.name,
                   precio: order.precio,
                   almacen: order.almacen,
                   ubicacion,
                   uid: currentUser.uid,
                   taken: false,
                   buyingItem: false,
                   ItemBought: false,
                   enCamino: false,
                   finalizado: false,
                   domiciliario: '' })
            .then(() => console.log('success'));
    };
};

export const ubicationChanged = (data) => {
    return {
        type: UBICATION_CHANGED,
        payload: data
    };
};

function makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
