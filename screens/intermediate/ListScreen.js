import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { professores, alunos } from "../../data/info";
import { ItemCard } from "../../components/ItemCards";

export default function FlatListExemplo() {
    const renderItem = ({ item }, style) => (
        <View style={style}>
            <ItemCard name={item.name} role={item.role} />
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>📜 Listas longas</Text>
                    <Text style={styles.subtitle}>Com FlatList e ScrollView</Text>

                    <View style={styles.card}>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>FlatList:</Text> ideal para listas grandes, pois renderiza apenas o que está visível.
                        </Text>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>ScrollView:</Text> usada para combinar múltiplas listas na mesma tela de forma fluida.
                        </Text>
                    </View>

                    <Text style={styles.sectionTitle}>👨‍🏫 Professores</Text>
                    <FlatList data={professores} renderItem={(item) => renderItem(item, styles.itemBox)} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} />

                    <Text style={styles.sectionTitle}>👨‍🎓 Alunos</Text>
                    <FlatList data={alunos} renderItem={(item) => renderItem(item, styles.verticalItem)} keyExtractor={(item) => item.id} scrollEnabled={false} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 8 / 9,
        backgroundColor: "#F9FAFB",
    },
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        padding: 20,
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
        padding: 16,
    },
    description: {
        fontSize: 16,
        color: "#374151",
        marginBottom: 10,
    },
    highlight: {
        fontWeight: "bold",
        color: "#2563EB",
    },
    sectionTitle: {
        fontSize: 20,
        color: "#0F172A",
        marginVertical: 10,
        fontWeight: "bold",
    },
    itemBox: {
        backgroundColor: "#E0F2FE",
        marginRight: 15,
        borderRadius: 15,
        width: 150,
        alignItems: "center",
    },
    verticalItem: {
        backgroundColor: "#E0F2FE",
        borderRadius: 15,
        marginBottom: 12,
    },
});
