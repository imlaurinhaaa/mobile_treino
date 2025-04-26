import React, { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function HooksScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [erroEmail, setErroEmail] = useState("");
    const [erroSenha, setErroSenha] = useState("");
    const [formValido, setFormValido] = useState(false);
    const [mensagemSucesso, setMensagemSucesso] = useState("");

    const validarCampos = () => {
        const emailValido = email.includes("@");
        const senhasIguais = senha === confirmaSenha && senha.length > 0;

        setErroEmail(emailValido || email.length === 0 ? "" : "❌ E-mail inválido");
        setErroSenha(senhasIguais || senha.length === 0 ? "" : "❌ As senhas não coincidem");
        setFormValido(emailValido && senhasIguais);
    };

    useEffect(() => {
        validarCampos();
    }, [email, senha, confirmaSenha]);

    const cadastrar = () => {
        if (formValido) {
            setMensagemSucesso("✅ Cadastro realizado com sucesso!");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 20}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>🎣 Hooks</Text>
                    <Text style={styles.subtitle}>Com useState e useEffect</Text>
                    <View style={styles.card}>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>useState:</Text> permite armazenar e atualizar valores no estado de um componente, respondendo a interações do usuário.
                        </Text>
                        <Text style={styles.description}>
                            🔹 <Text style={styles.highlight}>useEffect:</Text> executa ações quando o estado ou as propriedades de um componente mudam, como validações ou chamadas a APIs.
                        </Text>
                        <Text style={styles.label}>Email:</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholder="Digite seu email" returnKeyType="next" />
                        {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}
                        <Text style={styles.label}>Senha:</Text>
                        <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry placeholder="Digite sua senha" returnKeyType="next" />
                        <Text style={styles.label}>Confirmar Senha:</Text>
                        <TextInput style={styles.input} value={confirmaSenha} onChangeText={setConfirmaSenha} secureTextEntry placeholder="Confirme a senha" returnKeyType="done" />
                        {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}
                        <TouchableOpacity style={[styles.botao, { backgroundColor: formValido ? "#2563EB" : "#93C5FD" }]} onPress={cadastrar} disabled={!formValido}>
                            <Text style={styles.botaoTexto}>Cadastrar</Text>
                        </TouchableOpacity>
                        {mensagemSucesso ? <Text style={styles.mensagemSucesso}>{mensagemSucesso}</Text> : null}
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
        alignItems: "center",
        padding: 24,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingBottom: 30,
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
    label: {
        fontSize: 16,
        color: "#374151",
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: "#93C5FD",
        backgroundColor: "#EFF6FF",
        borderRadius: 10,
        padding: 10,
        marginBottom: 8,
        color: "#111827",
    },
    erro: {
        color: "red",
        marginBottom: 8,
    },
    botao: {
        marginTop: 16,
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    botaoTexto: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    mensagemSucesso: {
        marginTop: 16,
        color: "#10B981",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
});
