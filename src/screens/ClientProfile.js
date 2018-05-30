import React, { Component } from 'react';
import _ from 'lodash';
import {
    Container,
    Button,
    Text,
    Content,
    Form,
    Input,
    Item,
    Label
} from 'native-base';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { 
    logoutUser, 
    fetchProducts, 
    productSelected, 
    makeOrder, 
    ubicationChanged
} from '../actions';

class ClientProfile extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    onUbicationChanged(text) {
        this.props.ubicationChanged(text);
    }

    onLogOutPress() {
        const { navigate } = this.props.navigation;
        this.props.logoutUser();
        navigate('Login');
    }

    onPedidoPress() {
        const { navigate } = this.props.navigation;
        this.props.makeOrder(this.props.producto, this.props.ubicacion);
        navigate('inProcess');
    }

    onItemSelected(data) {
        this.props.productSelected(data);
    }

    dataSource() {
        const product = this.props.products.map((data) => {
            return data.name;
        });

        return product;
    }

    renderList() {
        return (
            this.props.products.map((data, i) => (
                <ListItem
                    hideChevron
                    key={i}
                    title={data.name}
                    subtitle={data.precio}
                    onPress={this.onItemSelected.bind(this, data)}
                />
            ))
        );
    }


    render() {
        return (  
            <Container>
                <Content>
                    {this.renderList()}
                    <Text style={styles.productPlaceHolder}> Producto a comprar: </Text>
                    <Text style={styles.productStyle}>{this.props.producto.name}</Text>
                    <Text style={styles.priceStyle}> {this.props.producto.precio}</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Dónde estás ubicado?</Label>
                            <Input
                                autoCapitalize='none'
                                onChangeText={this.onUbicationChanged.bind(this)}
                                value={this.props.ubicacion}
                            />
                        </Item>
                    </Form>
                    <Button
                        style={styles.buttonStyle}
                        rounded
                        block
                        success
                        onPress={this.onPedidoPress.bind(this)}
                    >
                        <Text> Hacer Pedido </Text>
                    </Button>
                    <Button
                        style={styles.buttonStyle}
                        rounded
                        block
                        danger
                        onPress={this.onLogOutPress.bind(this)}
                    >
                        <Text> Log Out </Text>
                    </Button>
                </Content>
            </Container>
        );
    }

}

const styles = {
    productPlaceHolder: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20
    },
    productStyle: {
        fontSize: 16,
        alignSelf: 'center',

    },
    priceStyle: {
        fontSize: 16,
        alignSelf: 'center'
    },
    buttonStyle: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    }
};

const mapStateToProps = state => {
    const products = _.map(state.products.productos, (val, key) => {
        return { ...val, key };
    });

    const { producto, ubicacion } = state.products;

    return { products, producto, ubicacion };
};

  export default connect(mapStateToProps, {
    logoutUser,
    fetchProducts,
    productSelected,
    makeOrder,
    ubicationChanged
  })(ClientProfile);
