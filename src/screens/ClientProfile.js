import React, { Component } from 'react';
import axios from 'axios';

class ClientProfile extends Component {

    componentWillMount() {
        axios.get('https://ufast-5d939.firebaseio.com/productos')
            .then(response => console.log(response.data));
    }

}

export default ClientProfile;
