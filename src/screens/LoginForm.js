import firebase from 'firebase';
import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Button, 
    Text, 
    Icon,
    Spinner,
    Toast,
} from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  componentWillMount() {
    const { navigate } = this.props.navigation;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate('Storage');
      }
    });
  }


  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }


  onRegisterButtonPress() {
    this.props.navigation.navigate('Register');
  }

  onButtonPress() {
    const { email, password } = this.props;
    Keyboard.dismiss();
    this.props.loginUser({ email, password });
    this.renderError();
  }

  renderError() {
    if (this.props.showError) {
      return (
            Toast.show({
              text: 'Authentication Error!',
              buttonText: 'Okay',
              type: 'danger',
              duration: 3000
            })
      );
    }
  }

  
  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <Content>
        <Button
          rounded  
          block
          success
          style={styles.buttonStyle}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text>Login</Text>
        </Button>
        <Button
        rounded 
        block 
        style={styles.buttonStyle}
        onPress={this.onRegisterButtonPress.bind(this)}
        >
            <Text>Sign Up</Text>
        </Button>
      </Content>
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
                    autoCapitalize='none'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                  />
                </Item>
                <Item floatingLabel>
                    <Icon active name='lock' />
                    <Label> Password </Label>
                    <Input
                      secureTextEntry
                      autoCapitalize='none'
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
    marginTop: 10
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, showError, loading, loggedIn } = auth;
  return { email, password, showError, loading, loggedIn };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
