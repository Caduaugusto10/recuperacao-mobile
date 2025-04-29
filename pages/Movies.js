import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Movies() {
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>

            <Text style={styles.title}>Movies</Text>

            <TextInput
                style={styles.cardInput}
                placeholder=" 🔍 Search"
            />

            <View style={styles.cardsContainer}>
                <View style={styles.cardBox}>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeiLKf_2xTQ198RP2nGY-mQC8Mb1Pr1AWJA&s" }}
                            style={styles.cardImage}
                        />
                    </View>
                    <Text style={styles.cardText}>Filme Carros</Text>
                </View>

                <View style={styles.cardBox}>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: "https://br.web.img2.acsta.net/c_300_300/medias/nmedia/18/87/34/17/19921605.jpg" }}
                            style={styles.cardImage}
                        />
                    </View>
                    <Text style={styles.cardText}>Velozes e Furiosos</Text>
                </View>
            </View>

            <View style={styles.miniCardsContainer}>
                <View style={styles.miniCardRow}>
                <View style={styles.miniCards}>
                    <Image 
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdjbPxBz1aCl8ibLdoE6XtAfc8PFxHXF0VQ&s"}}
                        style={styles.miniCardImage}
                    />
                </View>
                    <Text style={styles.miniCardText}>Need for Speed</Text>
                </View>

                <View style={styles.miniCardRow}>
                <View style={styles.miniCards}>
                    <Image 
                        source={{ uri: "https://play-lh.googleusercontent.com/5tYRNp_5XCK4IBAtsGeuj2VBAyXadumbTM2mSeQbLVhUmEh0--Y8Qr1R4CvukpZo6Y0q"}}
                        style={styles.miniCardImage}
                    />
                    </View>
                        <Text style={styles.miniCardText}>Drive </Text>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.boxView} 
                    onPress={() => navigation.navigate("Profile")} 
                >
                    <Text style={styles.textBox}>View All</Text>
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    gap: 40,
},
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        width: "100%",
},
    cardInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "80%",
        padding: 10,
        borderRadius: 50,
        textAlign: "start",
},
    cardsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 20,
},
    card: {
        width: 150,
        height: 150,
        backgroundColor: "gray",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
},

    cardImage: {
        width: "100%",
        height: "100%",
},
    cardText: {
        marginTop: 10,
        fontSize: 16,
        color: "#333",
        textAlign: "left",
        width: "100%",
    },
    cardBox: {
        alignItems: "center",
        width: 150,
    },
    miniCardsContainer: {
        marginTop: 20,
        width: "80%",
        alignItems: "flex-start",
},
    miniCardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
        fontWeight: 1,
    },
    miniCards: {
        width: "35%",
        height: 70,
        backgroundColor: "#ddd",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        overflow: "hidden",
        marginTop: 10,
}, 
    miniCardImage: {
        width: "100%",
        height: "100%",
},
    miniCardText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        width: "100%",
        textAlign: "left",
        marginLeft: 20,
    },
    boxView: {
        height: 40,
        backgroundColor: "gray",
        width: "80%",
        padding: 10,
        marginTop: 40,
    },
    textBox: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
});