import React, { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function SecureStorageScreen() {
    const [inputValue, setInputValue] = useState("");
    const [storedValue, setStoredValue] = useState("");

    useEffect(() => {
        const loadStoredValue = async () => {
            const storedValue = await SecureStore.getItemAsync("secureStorageKey");
            if (storedValue) {
                setStoredValue(storedValue);
            }
        };
        loadStoredValue();
    }, []);

    const handleSave = async () => {
        await SecureStore.setItemAsync("secureStorageKey", inputValue);
        setStoredValue(inputValue);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>🔐 Persistência</Text>
                <Text style={styles.subtitle}>Com Secure Storage</Text>

                <View style={styles.card}>
                    <Text style={styles.description}>
                        🔹 <Text style={styles.highlight}>expo-secure-store:</Text> é uma ferramenta que permite guardar informações de forma segura no seu celular, como senhas ou tokens. Feche o aplicativo e depois abra novamente para ver como os
                        dados continuam armazenados.
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite algum texto" value={inputValue} onChangeText={setInputValue} />
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Valor sem persistência: {inputValue}</Text>
                    <Text style={styles.text}>Valor com persistência: {storedValue}</Text>
                </View>
            </View>
        </SafeAreaView>
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
        alignItems: "center",
    },
    description: {
        fontSize: 16,
        color: "#374151",
        marginBottom: 20,
        lineHeight: 22,
    },
    highlight: {
        fontWeight: "bold",
        color: "#2563EB",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        width: "100%",
    },
    button: {
        backgroundColor: "#2563EB",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        marginTop: 15,
        textAlign: "center",
    },
});
