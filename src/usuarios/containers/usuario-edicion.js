import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import * as usuariosActions from '../../actions/usuariosActions';

class UsuarioEdicion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.usuario
            , guardado: true
        };
    };
    editarNombre = (nombre) => {
        this.setState({
            nombre,
        });
    }
    editarEmail = (email) => {
        this.setState({
            email,
        });
    }
    editarCelular = (celular) => {
        this.setState({
            celular,
        });
    }

    render() {
        return (
            <View style={styles.principal}>
                <View>
                    <Text>Nombre:</Text>
                    <TextInput
                        value={this.state.nombre}
                        onChangeText={(texto) => { this.editarNombre(texto) }}>
                    </TextInput>
                    <Text>Email:</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={(texto) => { this.editarEmail(texto) }}
                        keyboardType="email-address"></TextInput>
                    <Text>Teléfono:</Text>
                    <TextInput
                        value={this.state.celular}
                        onChangeText={(texto) => { this.editarCelular(texto) }}
                        keyboardType="phone-pad"></TextInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        flexDirection: 'column',
    }
})

const mapStateToProps = (reducers) => {
    return {
        usuario: reducers.usuariosReducer.selectedUsuario,
    };
};

export default connect(mapStateToProps, null)(UsuarioEdicion);