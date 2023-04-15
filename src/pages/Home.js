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

        <Button
            title="Formacao"
            onPress={ () => navigation.navigate('Formacao') }
        />

<Button
            title="Habilidades"
            onPress={ () => navigation.navigate('Habilidades') }
        />

<Button
            title="Experiencias"
            onPress={ () => navigation.navigate('Experiencias') }
        />
    </View>
  );
}

const estilos = StyleSheet.create({


});

export default Home;
