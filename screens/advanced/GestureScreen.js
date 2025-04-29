import React, { useRef } from "react"; // Importa React e o hook useRef para criar referências mutáveis
// useRef é um hook de baixa latência e que acessam o DOM sem precisar renderizar a página
import {
  SafeAreaView,
  Text,
  Image,
  Animated,
  PanResponder,
  StyleSheet,
  View,
} from "react-native"; // Importa componentes do React Native
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from "react-native-gesture-handler"; // Importa componentes para manipulação de gestos
import { gestures } from "../../data/finger"; // Importa dados de gestos de um arquivo externo

export default function GestureScreen() {
  const posicao = useRef(new Animated.ValueXY()).current; // Cria uma referência para a posição animada (x, y)
  const escala = useRef(new Animated.Value(1)).current; // Cria uma referência para a escala animada (zoom)

  // Configura o PanResponder para detectar gestos de arrastar
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true, // Define que o PanResponder deve ser ativado ao mover
    onPanResponderMove: Animated.event(
      [null, { dx: posicao.x, dy: posicao.y }],
      {
        useNativeDriver: false, // Atualiza a posição animada com base no movimento do usuário
      }
    ),
    onPanResponderRelease: () => {
      // Quando o gesto é liberado, retorna a posição ao ponto inicial
      Animated.spring(posicao, {
        toValue: { x: 0, y: 0 }, // Define a posição inicial como destino
        useNativeDriver: false, // Desativa o uso do driver nativo
      }).start(); // Inicia a animação
    },
  });

  // Configura o evento de pinçar (zoom) para atualizar a escala
  const aoPinçar = Animated.event([{ nativeEvent: { scale: escala } }], {
    useNativeDriver: false, // Atualiza a escala animada com base no gesto de pinçar
  });

  // Define o comportamento ao soltar o gesto de pinçar
  const aoSoltar = () => {
    Animated.spring(escala, {
      toValue: 1, // Retorna a escala ao valor inicial (1)
      useNativeDriver: false, // Desativa o uso do driver nativo
    }).start(); // Inicia a animação
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>📸 Gestos de Pan e Zoom</Text>
        <Text style={styles.subtitle}>
          Com GestureHandlerRootView, PinchGestureHandler e Animated
        </Text>
        <View style={styles.card}>
          <Text style={styles.description}>
            🔹 <Text style={styles.highlight}>GestureHandlerRootView:</Text>{" "}
            componente usado para envolver componentes que usarão gestos, como o
            pan e zoom.
          </Text>
          <Text style={styles.description}>
            🔹 <Text style={styles.highlight}>PinchGestureHandler:</Text>{" "}
            permite que o usuário realize o gesto de pinçar (zoom) em um
            componente.
          </Text>
          <Text style={styles.description}>
            🔹 <Text style={styles.highlight}>Animated:</Text> utilizado para
            criar animações. No exemplo, é usado para animar a posição e o zoom
            da imagem.
          </Text>
          <GestureHandlerRootView style={styles.gesture}>
            <PinchGestureHandler
              onGestureEvent={aoPinçar}
              onHandlerStateChange={aoSoltar}
            >
              <Animated.View
                style={[
                  posicao.getLayout(),
                  { transform: [{ scale: escala }] },
                ]}
                {...panResponder.panHandlers}
              >
                <Image
                  source={{ uri: gestures[0].imageUrl }}
                  style={styles.imagem}
                  resizeMode="contain"
                />
              </Animated.View>
            </PinchGestureHandler>
          </GestureHandlerRootView>
          <Text style={styles.instrucao}>
            ⬆️ Dê zoom • ➡️ Arraste • 👆 Com toque
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 9 / 10,
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
    marginBottom: 10,
    lineHeight: 22,
    textAlign: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#2563EB",
  },
  gesture: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  imagem: {
    width: 250,
    height: 143,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: "#2563EB",
  },
  instrucao: {
    color: "#6B7280",
    marginTop: 10,
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
  },
});
