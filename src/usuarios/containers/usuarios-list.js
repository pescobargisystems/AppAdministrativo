import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
} from 'react-native';
import * as usuariosActions from '../../actions/usuariosActions';
import { connect } from 'react-redux';


class UsuarioList extends Component {
    async componentDidMount(){
        await this.props.obtenerUsuarios();
        console.log("Se tuvieron datos", this.props.listado_usuarios);
    };
    render() {
        return (
            <>
               <Text>Hola Mundo</Text>
            </>
        );
    } 
}

const mapStateToProps = (reducers) => {
    return{
        listado_usuarios: reducers.usuariosReducer.list,
    };
}
export default connect(mapStateToProps, usuariosActions)(UsuarioList);