import React, { Component } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label,
    Button, 
    Text, 
    Header,
    Body,
    Title,
    Spinner,
    Toast,
    Icon
} from 'native-base';
import { emailChanged, passwordChanged, registerUser } from '../actions';

class RegisterForm extends Component {
    
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }


    renderError() {
        if (this.props.showError) {
            return (
                Toast.show({
                    text: "Registration Error!",
                    buttonText: "Okay",
                    position: "top",
                    type: "danger",
                    duration: 3000
                })
            );
        }
    }

    onButtonPress() {
        const { email, password } = this.props;
        {Keyboard.dismiss()}
        this.props.registerUser({ email, password });
        {this.renderError()}
    }

    renderButton() {
        if (this.props.loading) {
          return <Spinner />;
        }
    
        return (
          <Button
            rounded  
            block
            style={styles.buttonStyle}
            onPress={this.onButtonPress.bind(this)}
            >
            <Text>Sign Up</Text>
          </Button>
        );
      }
    
    render() {
        return (
          <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Icon active name='contact' />
                        <Label> Email </Label>
                        <Input 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Icon active name='lock' />
                        <Label> Password </Label>
                        <Input
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        />
                    </Item>
                    {this.renderButton()}
                </Form>
            </Content>
          </Container>
        );
    }
 }
    
const styles = {
    errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
    },
    buttonStyle: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20
    }
};
    

const mapStateToProps = ({ auth }) => {
    const { email, password, showError, loading } = auth;
    return { email, password, showError, loading };
};
  
export default connect(mapStateToProps, {
emailChanged, 
passwordChanged,
registerUser
})(RegisterForm);
  
