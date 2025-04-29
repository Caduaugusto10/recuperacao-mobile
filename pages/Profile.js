import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileCard from "../components/ProfileCard"; 

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>


            <ProfileCard 
                name="Carlos Augusto" 
                email="carlos.augusto@aluno.senai.br" 
                bio="Desenvolvedor apaixonado por tecnologia e inovação." 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },

});