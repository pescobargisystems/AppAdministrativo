import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Usuario from '../components/usuario';

class UsuarioList extends Component {
    render() {
        return (
            <View>
                <Usuario
                    nombre={"Pablo César"} />
            </View>
        );
    }
}

export default UsuarioList;