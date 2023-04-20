import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Experiencias = ({ navigation }) => {
    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Experiencias</Text>
            </View>

            <View style={estilo.textoContainer}>
                <Text style={estilo.texto}>
                Trabalhei em supermercados por 15 anos.
                </Text>

                <Text style={estilo.texto}>
                Atualmente trabalho em uma Empresa de Desenvolvimento de Sistemas, no setor de Atendimento Help Desk
                </Text>
            </View>

            <View style={estilo.botoes}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilo.botao}>
                    <Text style={estilo.textoBotao}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Contato')} style={estilo.botao}>
                    <Text style={estilo.textoBotao}>Contato</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        fontFamily: "Trebuchet MS",
    },
    titulo: {
        fontSize: '2em',
        marginBottom: 10,
        color: "#00a",
        fontWeight: "bold",
        fontFamily: 'inherit',
    },
    textoContainer: {
        display: "flex",
        flexGrow: 2,
    },
    botao: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 1,
        width: "48%",
    },
    textoBotao: {
        fontSize: "1.3em",
        fontFamily: 'inherit',
        fontWeight: 'bold',
        color: "#00a",
    },
    texto: {
        fontSize: "1.3em",
        marginBottom: 15,
        fontFamily: 'inherit',
    },
    botoes: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#00a",
        borderRadius: 3,
        gap: 3,
    },
});
    
export default Experiencias;