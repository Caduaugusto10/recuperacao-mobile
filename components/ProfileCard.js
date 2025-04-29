import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileCard({ name, email, bio }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.bio}>{bio}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        color: "#555",
        marginBottom: 10,
    },
    bio: {
        fontSize: 14,
        color: "#777",
    },
});