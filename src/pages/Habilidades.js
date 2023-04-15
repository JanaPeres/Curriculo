import React from 'react';
import { Text, View, Button } from 'react-native';

 
const Habilidades = ({ navigation }) => {  
    return (
        <View>
           <Text>Fiz curso em Excel, World, Datilografia, Fluxo de Caixa e Movimentação Bancária.</Text>
    
           <Button
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
      );
    }

    
    export default Habilidades;