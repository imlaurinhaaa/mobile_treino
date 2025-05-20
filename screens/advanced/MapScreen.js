import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Keyboard, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const MAPBOX_TOKEN = "pk.eyJ1IjoiaW1sYXVyaW5oYWFhIiwiYSI6ImNtYXdmN2l6bzBmMzUybHE4NW45MDFyMngifQ.NcrA--me3Gxp5iDVhNrd_A";

export default function MapScreen() {
    const [location, setLocation] = useState(null);
    const [routeCoords, setRouteCoords] = useState([]);
    const [destination, setDestination] = useState("");
    const [loading, setLoading] = useState(false);

    const mapRef = useRef(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                alert("Permissão negada para acessar localização");
                return;
            }

            let loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
        })();
    }, []);

    const tracarRota = async (origem, destino) => {
        try {
            const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${origem.longitude},${origem.latitude};${destino.longitude},${destino.latitude}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;

            const res = await axios.get(url);
            const coords = res.data.routes[0].geometry.coordinates.map(([lon, lat]) => ({
                latitude: lat,
                longitude: lon,
            }));

            setRouteCoords(coords);

            mapRef.current.fitToCoordinates(coords, {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
                animated: true,
            });
        } catch (error) {
            console.error("Erro ao traçar a rota:", error);
            alert("Erro ao traçar a rota");
        }
    };

    const buscarDestino = async () => {
        if (!destination.trim()) {
            alert("Por favor, colocar um endereço válido.");
            return;
        }

        try {
            Keyboard.dismiss();
            setLoading(true);

            const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(destination)}.json?access_token=${MAPBOX_TOKEN}`;
            console.log("URL de Geocodificação:", geoURL);

            const geoRes = await axios.get(geoURL);

            if (!geoRes.data.features || geoRes.data.features.length === 0) {
                alert("Endereço não encontrado");
                return;
            }

            const coords = geoRes.data.features[0].geometry.coordinates;
            const destionCoords = {
                latitude: coords[1],
                longitude: coords[0],
            };

            console.log("Coordenadas do Destino:", destionCoords);

            await tracarRota(location, destionCoords);
        } catch (error) {
            console.error("Erro ao buscar o endereço:", error);
            alert("Erro ao buscar o endereço");
        } finally {
            setLoading(false);
        }
    };

    const resetarMapa = () => {
        setRouteCoords([]);
        setDestination("");
        if (location) {
            mapRef.current?.animateToRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        }
    };

    return (
        <View style={styles.container}>
            {location ? (
                <>
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker coordinate={location} title="Você está aqui" />
                        {routeCoords.length > 0 && (
                            <>
                                <Polyline
                                    coordinates={routeCoords}
                                    strokeWidth={4}
                                    strokeColor="blue"
                                />
                                <Marker
                                    coordinate={routeCoords[routeCoords.length - 1]}
                                    title="Destino"
                                />
                            </>
                        )}
                    </MapView>
                </>
            ) : (
                <Text>Carregando localização...</Text>
            )}
            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.loadingText}>Carregando...</Text>
                </View>
            )}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o endereço"
                    value={destination}
                    onChangeText={setDestination}
                />
                <View style={styles.buttons}>
                    <Button title="Buscar" onPress={buscarDestino} disabled={loading} />
                    <Button title="Resetar" color="red" onPress={resetarMapa} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },

    map: { flex: 1 },

    inputContainer: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        elevation: 5,
    },

    input: {
        backgroundColor: "#eee",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    loadingContainer: {
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        alignItems: "center",
    },

    loadingText: {
        marginTop: 10,
        textAlign: "center",
    },
});