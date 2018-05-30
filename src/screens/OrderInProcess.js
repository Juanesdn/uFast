import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Body,
    CheckBox,
    ListItem
} from 'native-base';

class OrderInProcess extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <CheckBox checked />
                        <Body>
                            <Text>Buscando un Domiciliario</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>Domiciliario encontrado</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>Comprando su pedido</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>Pedido Comprado</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>Pedido en camino</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                            <Text>Entrega Finalizada</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default OrderInProcess;
