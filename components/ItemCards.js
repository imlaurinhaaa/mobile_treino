import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ItemCard({ name, role }) {
    return (
        <View style={styles.itemBox}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemRole}>{role}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: "#E0F2FE",
        padding: 15,
        borderRadius: 15,
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0C4A6E",
    },
    itemRole: {
        fontSize: 14,
        color: "#0369A1",
    },
});
