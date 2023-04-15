import React from 'react';
import { Text, View, Button } from 'react-native';

 
const Formacao = ({ navigation }) => {  
    return (
        <View>
           <Text>Formada em Administração de empresas.</Text>
           <Text>Cursando Técnico em Desenvolvimento de Sistemas.</Text>
    
           <Button
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
      );
    }

    
    export default Formacao;
    