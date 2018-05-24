import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './screens/LoginForm';
import RegisterForm from './screens/RegisterForm';

const Auth = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            title: "Sign In"
        }
    },
    Register: {
        screen: RegisterForm,
        navigationOptions: {
            title: "Sign Up"
        }
    }
});


export default Auth;
