import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { data } from "../../data/memes";

export default function CarouselExample() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>🎠 Carrossel de Imagens</Text>
                    <Text style={styles.subtitle}>Com react-native-reanimated-carousel</Text>

                    <View style={styles.card}>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>Carrossel:</Text> Um componente que exibe imagens de forma rotativa e interativa, ideal para mostrar múltiplas opções de conteúdo em um único espaço.
                        </Text>
                    </View>

                    <View style={styles.carouselContainer}>
                        <Carousel
                            width={320}
                            height={300}
                            data={data}
                            autoPlay={true}
                            autoPlayInterval={3000}
                            scrollAnimationDuration={1000}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="contain" />
                                </View>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
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
        marginVertical: 20,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#4B5563",
        marginBottom: 30,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#DBEAFE",
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: "#374151",
    },
    highlight: {
        fontWeight: "bold",
        color: "#2563EB",
    },
    carouselContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderColor: "#ddd",
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: 260,
    },
    indexText: {
        fontSize: 16,
        color: "#374151",
        textAlign: "center",
        marginTop: 10,
    },
});
