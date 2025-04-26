import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function AlertaModalScreen() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://pbs.twimg.com/media/FNaByxLXMAE_Ruc.png" }} style={{ width: 300, height: 265 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 8 / 9,
        backgroundColor: "#F9FAFB",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#4B5563",
        marginBottom: 20,
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
    botao: {
        marginTop: 20,
        padding: 12,
        backgroundColor: "#2563EB",
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    botaoTexto: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
    },
    modalImage: {
        width: 80,
        height: 80,
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        color: "#6B7280",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#93C5FD",
        backgroundColor: "#EFF6FF",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        color: "#111827",
    },
    botaoModal: {
        marginTop: 10,
        padding: 12,
        backgroundColor: "#2563EB",
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
});
