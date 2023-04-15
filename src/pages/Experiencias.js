import React from 'react';
import { Text, View, Button } from 'react-native';

 
const Experiencias = ({ navigation }) => {  
    return (
        <View>
           <Text>Trabalhei em supermercados por 15 anos.</Text>
           <Text>Atualmente trabalho em uma Empresa de Desenvolvimento de Sistemas, no setor de Atendimento Help Desk</Text>
           
    
           <Button
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
      );
    }

    
    export default Experiencias;