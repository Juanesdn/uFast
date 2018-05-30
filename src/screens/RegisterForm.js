import React, { Component } from 'react';
import { Keyboard } from 'react-native';
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
    Spinner,
    Toast,
    Icon,
    ListItem,
    Right,
    Radio
} from 'native-base';
import { 
    emailChanged, 
    passwordChanged, 
    registerUser, 
    typeChanged, 
    nameChanged, 
    createProfile 
} from '../actions';

class RegisterForm extends Component {
    
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onNameChange(text) {
        this.props.nameChanged(text);
    }

    onClientPress() {
        this.props.typeChanged('Cliente');
    }

    onDomiciliarioPress() {
        this.props.typeChanged('Domiciliario');
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        Keyboard.dismiss();
        this.props.registerUser({ email, password });
        this.renderError();
    }
    
    createProfile() {
        const { name, type } = this.props;
        if (name !== '' && type !== '') {
            this.props.createProfile({ name, type });
        }
    }

    renderError() {
        if (this.props.showError) {
            return (
                Toast.show({
                    text: 'Registration Error!',
                    buttonText: 'Okay',
                    position: 'top',
                    type: 'danger',
                    duration: 3000
                })
            );
        }
    }

    
    renderButton() {
        if (this.props.loading) {
          return <Spinner />;
        } else {
            if (!this.props.registered) {
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

            return (
                <Button
                rounded  
                block
                style={styles.buttonStyle}
                onPress={this.createProfile.bind(this)}
                >
                <Text>Siguiente</Text>
                </Button>
            );
        }    
    }


    render() {
        if (this.props.loggedIn) {
            this.props.navigation.navigate('Login');
        } else {
            return (
                <Container>
                  <Content>
                      <Form>
                          <Item floatingLabel>
                              <Label> Nombre </Label>
                              <Input 
                                  autoCapitalize='none'
                                  onChangeText={this.onNameChange.bind(this)}
                                  value={this.props.name}
                              />
                           </Item>
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
                              onChangeText={this.onPasswordChange.bind(this)}
                              value={this.props.password}
                              />
                          </Item>
                          <ListItem>
                              <Text>Cliente</Text>
                              <Right>
                                  <Radio
                                      onPress={this.onClientPress.bind(this)}  
                                      selected={this.props.type === 'Cliente'}
                                  />
                              </Right>
                          </ListItem>
                          <ListItem>
                              <Text>Domiciliario</Text>
                              <Right>
                                  <Radio
                                      onPress={this.onDomiciliarioPress.bind(this)}
                                      selected={this.props.type === 'Domiciliario'}
                                  />
                              </Right>
                          </ListItem>
                          {this.renderButton()}
                      </Form>
                  </Content>
                </Container>
            );
        }     
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
    const { email, password, showError, loading, type, name, loggedIn, registered } = auth;
    return { email, password, showError, loading, type, name, loggedIn, registered };
};
  
export default connect(mapStateToProps, {
    emailChanged, 
    passwordChanged,
    registerUser,
    typeChanged,
    nameChanged,
    createProfile
})(RegisterForm);
  
