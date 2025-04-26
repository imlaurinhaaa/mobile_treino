import React, { useState } from "react";
import { View, SafeAreaView, KeyboardAvoidingView, ScrollView, Text, TextInput, Platform, StyleSheet } from "react-native";

export default function TextoScreen() {
    const [nome, setNome] = useState("");

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 20}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                    <Text style={styles.title}>📝 Componentes Nativos</Text>
                    <Text style={styles.subtitle}>Com Text, TextInput, ScrollView e KeyboardAvoidingView</Text>
                    <View style={styles.card}>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>Text:</Text> exibe títulos, parágrafos e mensagens.
                        </Text>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>TextInput:</Text> campo de entrada como um <Text style={styles.code}>input</Text> no HTML.
                        </Text>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>KeyboardAvoidingView:</Text> evita que o teclado esconda elementos. Indicado para formulários e campos de entrada.
                        </Text>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>ScrollView:</Text> permite rolagem de conteúdo.
                        </Text>
                        <Text style={styles.description}>Digite seu nome:</Text>
                        <TextInput style={styles.input} placeholder="Ex: Marcello Carboni" value={nome} onChangeText={setNome} />
                        {nome ? <Text style={styles.greeting}>Olá, {nome} Dev 👋</Text> : null}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
    },
    scrollContainer: {
        flexGrow: 1,
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
        marginBottom: 20,
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
    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#CBD5E1",
        height: 45,
        fontSize: 16,
        width: "100%",
    },
    greeting: {
        fontSize: 18,
        color: "#10B981",
        fontWeight: "600",
        marginVertical: 20,
        textAlign: "center",
        width: "100%",
    },
});
