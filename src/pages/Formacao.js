import React from 'react';
import { Text, View, Button } from 'react-native';

 
const Formacao = ({ navigation }) => {  
    return (
        <View>
           <Text>Formação</Text>
    
           <Button
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
      );
    }

    
    export default Formacao;
    