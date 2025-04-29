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
                            source={{ uri: "https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg" }}
                            style={styles.cardImage}
                        />
                    </View>
                    <Text style={styles.cardText}>Paisagem 1</Text>
                </View>

                <View style={styles.cardBox}>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: "https://static.preparaenem.com/2024/04/2-paisagem-nos-alpes.jpg" }}
                            style={styles.cardImage}
                        />
                    </View>
                    <Text style={styles.cardText}>Paisagem 2</Text>
                </View>
            </View>

            <View style={styles.miniCardsContainer}>
                <View style={styles.miniCardRow}>
                <View style={styles.miniCards}>
                    <Image 
                        source={{ uri: "https://wallpapers.com/images/hd/landscape-pictures-a3hr6gk3xfx36dyg.jpg"}}
                        style={styles.miniCardImage}
                    />
                </View>
                    <Text style={styles.miniCardText}>Texto ao lado do Mini Card</Text>
                </View>

                <View style={styles.miniCardRow}>
                <View style={styles.miniCards}>
                    <Image 
                        source={{ uri: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/thinkstock-scandinavian-summer-landscape-sweden.jpeg?quality=70&strip=info&w=922&w=636"}}
                        style={styles.miniCardImage}
                    />
                    </View>
                        <Text style={styles.miniCardText}>Texto ao lado do Mini Card </Text>
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