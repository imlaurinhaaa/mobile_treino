import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function EstruturaLayoutScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>📐 Estrutura e Layout</Text>
                <Text style={styles.subtitle}>Com View e SafeAreaView</Text>
                <View style={styles.card}>
                    <Text style={styles.description}>
                        🔹 <Text style={styles.highlight}>View:</Text> age como uma <Text style={styles.code}>div</Text> do HTML, usada para estruturar elementos.
                    </Text>
                    <Text style={styles.description}>
                        🔹 <Text style={styles.highlight}>SafeAreaView:</Text> evita que o conteúdo fique sob a <Text style={styles.code}>barra de status</Text>, notches ou botões virtuais.
                    </Text>
                    <View style={styles.box}>
                        <Text style={styles.boxText}>🎯 Exemplo: conteúdo dentro de uma View!</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 9/10,
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
    },
    subtitle: {
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
    code: {
        backgroundColor: "#E5E7EB",
        paddingHorizontal: 4,
        borderRadius: 4,
        fontFamily: "monospace",
    },
    box: {
        marginTop: 20,
        backgroundColor: "#BAE6FD",
        padding: 16,
        borderRadius: 10,
    },
    boxText: {
        color: "#0369A1",
        fontWeight: "600",
    },
});
