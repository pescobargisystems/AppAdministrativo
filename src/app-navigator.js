import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UsuariosList from './usuarios/containers/usuarios-list';
import UsuarioDetalle from './usuarios/containers/usuario-detalle';
import UsuarioEdicion from './usuarios/containers/usuario-edicion';

const ModalStack = createStackNavigator();

const RootStack = createStackNavigator();
class AppNavigator extends Component {
  RootStackScreen = (props) => (
    <RootStack.Navigator headerMode="screen">
      <RootStack.Screen
        name="UsuarioList"
        component={UsuariosList}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="UsuarioDetalle"
        component={UsuarioDetalle}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
          <RootStack.Screen
        name="UsuarioEdicion"
        component={UsuarioEdicion}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
  render() {
    return (
      <NavigationContainer>
        <this.RootStackScreen />
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    token: reducers.usuariosReducer.token,
  };
};

export default connect(mapStateToProps)(AppNavigator);
