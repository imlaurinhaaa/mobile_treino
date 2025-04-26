import React, { useState } from "react";
import { Text, Button, TouchableOpacity, Image, StyleSheet, View } from "react-native";

export default function ButtonScreen() {
    const [mensagem, setMensagem] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🧩 Componentes Nativos</Text>
            <Text style={styles.subtitle}>Com Botão, TouchableOpacity e Imagem</Text>
            <View style={styles.card}>
                <Text style={styles.description}>
                    🔹 <Text style={styles.highlight}>Button:</Text> botão nativo simples com rótulo e ação.
                </Text>
                <Button title="Clique aqui" onPress={() => setMensagem("Você clicou em um botão!")} />
                <Text style={styles.description}>
                    🔹 <Text style={styles.highlight}>TouchableOpacity:</Text> botão personalizável com efeito de toque.
                </Text>
                <TouchableOpacity style={styles.customButton} onPress={() => setMensagem("Você clicou em um TouchableOpacity!")}>
                    <Text style={styles.customButtonText}>Toque aqui</Text>
                </TouchableOpacity>
                {mensagem && <Text style={styles.mensagem}>{mensagem}</Text>}
                <Text style={styles.description}>
                    🔹 <Text style={styles.highlight}>Image:</Text> pode carregar imagens de URL ou locais.
                </Text>
                <View style={styles.imageRow}>
                    <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image} />
                    <Image source={require("../../assets/icon.png")} style={styles.image} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 9/10,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#4B5563",
        marginBottom: 15,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#DBEAFE",
        borderRadius: 16,
        padding: 20,
        width: "100%",
    },
    description: {
        fontSize: 16,
        color: "#374151",
        marginBottom: 10,
        lineHeight: 22,
    },
    highlight: {
        fontWeight: "bold",
        color: "#2563EB",
    },
    customButton: {
        backgroundColor: "#2563EB",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 20,
        alignItems: "center",
    },
    customButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    mensagem: {
        color: "#10B981",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 10,
    },
    imageRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
        marginVertical: 10,
    },
    image: {
        width: 75,
        height: 75,
        resizeMode: "contain",
        borderRadius: 10,
    },
});
