import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Persistence from "../screens/advanced/SecureStorageScreen";
import GestureScreen from "../screens/advanced/GestureScreen";

const Tab = createBottomTabNavigator();

export default function IntermediateTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Persistence"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarActiveTintColor: "#1D4ED8",
                tabBarInactiveTintColor: "#6B7280",
            }}
        >
            <Tab.Screen
                name="Persistence"
                component={Persistence}
                options={{
                    tabBarLabel: "Persistence",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "shield" : "shield-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Gesture"
                component={GestureScreen}
                options={{
                    tabBarLabel: "Gestures",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "hand-left" : "hand-left-outline"} size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 17,
        height: 70,
        backgroundColor: "rgba(15, 15, 15, 0.15)",
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 30,
        paddingTop: 8,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        marginHorizontal: 10,
    },
    tabBarLabel: {
        fontSize: 12,
    },
});
