import React, { Component } from 'react';
import _ from 'lodash';
import {
    Container,
    Button,
    Text,
    Content,
    List,
    ListItem
} from 'native-base';
import { connect } from 'react-redux';
import { logoutUser, fetchProducts } from '../actions';

class ClientProfile extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }


    onLogOutPress() {
        const { navigate } = this.props.navigation;
        this.props.logoutUser();
        navigate('Login');
    }

    dataSource() {
        const product = this.props.products.map((data) => {
            return data.name;
        });

        return product;
    }

    renderRow(product) {
        return (
            <ListItem>
                <Text>{product}</Text>
            </ListItem>
        );
    }

    render() {
        return (  
            <Container>
                <Content>
                    <List 
                        dataArray={this.dataSource()}
                        renderRow={this.renderRow} 
                    />
                    <Button
                        onPress={this.onLogOutPress.bind(this)}
                    >
                        <Text> Log Out </Text>
                    </Button>
                </Content>
            </Container>
        );
    }

}

const mapStateToProps = state => {
    const products = _.map(state.products, (val, key) => {
        return { ...val, key };
    });

    return { products };
};

  export default connect(mapStateToProps, {
    logoutUser,
    fetchProducts
  })(ClientProfile);
