import React from 'react';
import { Text } from 'react-native';

function Usuario(props){
    return(
        <>
            <Text>Soy el component usuario. Mi nombre es {props.nombre}</Text>
        </>
    );
};

export default Usuario;