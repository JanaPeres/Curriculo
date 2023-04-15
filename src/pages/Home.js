import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

 
const Home = ({ navigation }) => {  
  return (
    <View>
       <Text>Pagina Inicial</Text>

       <Button
            title="Sobre"
            onPress={ () => navigation.navigate('Sobre') }
        />
    </View>
  );
}

const estilos = StyleSheet.create({


});

export default Home;
