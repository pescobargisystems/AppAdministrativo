import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, Button, View, Image, StyleSheet} from 'react-native';
import Layout from '../../sections/containers/layout';
import {NavigationActions, withNavigation} from '@react-navigation/compat';

class UsuarioDetalle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <View style={styles.principal}>
          <View style={styles.izquierdo}>
            <Image
              style={styles.avatar}
              source={{
                uri: `https://fromearth.xyz/qr/v/${this.props.usuario.avatar}`,
              }}
            />
          </View>
          <View style={styles.centro}>
            <Text style={styles.titulo}>{this.props.usuario.nombre}</Text>           
            <Text style={styles.titulo}>{this.props.usuario.celular}</Text>
            <Text style={styles.titulo}>{this.props.usuario.email}</Text>
          </View>
        </View>
        <Button
          onPress={() => {
            this.props.navigation.goBack();
          }}
          title="Regresar"></Button>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 150 / 2,
  },
  izquierdo: {
    width: 120,
    flexDirection: 'column',
  },
  centro: {
    flex: 1,
  },
  principal:{
    flexDirection:'row',
  },
  titulo: {
    fontSize: 18,
    padding: 4,
    color: '#4d81a9',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (reducers) => {
  return {
    usuario: reducers.usuariosReducer.selectedUsuario,
  };
};
export default connect(mapStateToProps, null)(UsuarioDetalle);
