import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ComponentesPropsScreen() {
    const explicacoes = [
        {
            texto: "🔹 ",
            destaque: "Componente:",
            descricao: "Pensa em um componente como uma peça de Lego. Cada peça tem uma função e você pode usá-la várias vezes em diferentes partes do app, sem precisar recriar tudo.",
        },
        {
            texto: "🔹 ",
            destaque: "Props:",
            descricao: "Props são como 'instruções' que você manda para um componente. Elas dizem o que o componente deve mostrar ou fazer, sem mudar o código dele.",
        },
    ];
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>⚛️ Personalização</Text>
            <Text style={styles.subtitle}>Com Componentes criados por você e uso de Props</Text>

            <View style={styles.card}>
                {explicacoes.map((item, index) => (
                    <Text key={index} style={styles.description}>
                        {item.texto}
                        <Text style={styles.highlight}>{item.destaque}</Text> {item.descricao}
                    </Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 9/10,
        backgroundColor: "#F9FAFB",
        padding: 24,
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
});
