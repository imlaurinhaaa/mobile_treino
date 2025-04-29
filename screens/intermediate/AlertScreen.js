import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Alert, Modal, KeyboardAvoidingView, Platform, Image } from "react-native";

export default function AlertaModalScreen() {
    // Estado para controlar a visibilidade do modal
    const [modalVisible, setModalVisible] = useState(false);
    // Estado para armazenar o nome digitado pelo usuário
    const [nome, setNome] = useState("");

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Componente para evitar sobreposição do teclado em dispositivos iOS */}
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                {/* Título principal da tela */}
                <Text style={styles.title}>🎯 Mensagens</Text>
                {/* Subtítulo explicativo */}
                <Text style={styles.subtitle}>Com Alertas e Modal</Text>

                <View style={styles.card}>
                    {/* Descrição sobre o uso de alertas */}
                    <Text style={styles.description}>
                        🔹 <Text style={styles.highlight}>Alertas</Text> Usado para exibir mensagens temporárias ao usuário, como notificações ou avisos rápidos.
                    </Text>
                    {/* Descrição sobre o uso de modais */}
                    <Text style={styles.description}>
                        🔹 <Text style={styles.highlight}>Modal</Text> Um componente que aparece sobre o conteúdo da página, geralmente para coletar entradas do usuário ou exibir informações importantes.
                    </Text>

                    {/* Botão para exibir um alerta */}
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() =>
                            Alert.alert(
                                "Alerta", // Título do alerta
                                "Você clicou no botão de alerta!", // Mensagem do alerta
                                [
                                    { text: "OK" }, // Botão de confirmação
                                    { text: "Cancelar" }, // Botão de cancelamento
                                ],
                                { cancelable: true } // Permite fechar o alerta clicando fora
                            )
                        }
                    >
                        <Text style={styles.botaoTexto}>Mostrar Alerta</Text>
                    </TouchableOpacity>

                    {/* Botão para exibir o modal */}
                    <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
                        <Text style={styles.botaoTexto}>Mostrar Modal</Text>
                    </TouchableOpacity>

                    {/* Componente Modal para exibir conteúdo sobreposto */}
                    <Modal
                        transparent={true} // Fundo transparente
                        visible={modalVisible} // Controla a visibilidade do modal
                        animationType="slide" // Animação de entrada do modal
                        onRequestClose={() => setModalVisible(false)} // Fecha o modal ao pressionar o botão de voltar
                    >
                        <View style={styles.modalBackground}>
                            {/* Container do conteúdo do modal */}
                            <View style={styles.modalContainer}>
                                {/* Imagem exibida no modal */}
                                <Image
                                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                                    style={styles.modalImage}
                                />
                                {/* Título do modal */}
                                <Text style={styles.modalTitle}>Bem-vindo(a)!</Text>
                                {/* Descrição do modal */}
                                <Text style={styles.modalDescription}>Digite seu nome abaixo para continuar.</Text>
                                {/* Campo de entrada de texto para o nome */}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Seu nome" // Texto de placeholder
                                    value={nome} // Valor atual do campo
                                    onChangeText={setNome} // Atualiza o estado ao digitar
                                />
                                {/* Botão para fechar o modal */}
                                <TouchableOpacity style={styles.botaoModal} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.botaoTexto}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </KeyboardAvoidingView>
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
