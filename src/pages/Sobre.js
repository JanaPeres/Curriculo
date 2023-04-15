import React from 'react';
import { View, Text, Button } from "react-native";

const Sobre = ({ navigation }) => {
    return (
        <View>
            <Text>Sobre mim</Text>
            <Text>
                Me chamo Janaina, gosto de animais. Tenho 41 anos, casada. Tenho uma filha.
                Trabalho em uma empresa de desenvolvimento de sistemas 
                e atuo como Atendente de HelDesk.
            </Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Sobre;