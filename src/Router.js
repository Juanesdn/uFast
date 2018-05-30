import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './screens/LoginForm';
import RegisterForm from './screens/RegisterForm';
import ClientProfile from './screens/ClientProfile';
import OrderInProcess from './screens/OrderInProcess';

const Auth = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    Register: {
        screen: RegisterForm,
        navigationOptions: {
            title: 'Sign Up'
        }
    },
    Storage: {
        screen: ClientProfile,
        navigationOptions: {
            title: 'Inventory',
            headerLeft: null
        }
    },
    inProcess: {
        screen: OrderInProcess,
        navigationOptions: {
            title: 'Order In Process',
            headerLeft: null
        }
    }
});


export default Auth;
