import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import HooksScreen from "../screens/intermediate/HooksScreen";
import AlertScreen from "../screens/intermediate/AlertScreen";
import ListScreen from "../screens/intermediate/ListScreen";
import CarrouselScreen from "../screens/intermediate/CarrouselScreen";

const Tab = createBottomTabNavigator();

export default function IntermediateTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Hooks"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarActiveTintColor: "#1D4ED8",
                tabBarInactiveTintColor: "#6B7280",
            }}
        >
            <Tab.Screen
                name="Hooks"
                component={HooksScreen}
                options={{
                    tabBarLabel: "Hooks",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "log-in" : "log-in-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Listas"
                component={ListScreen}
                options={{
                    tabBarLabel: "Listas",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "list" : "list-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Carrousel"
                component={CarrouselScreen}
                options={{
                    tabBarLabel: "Carrousel",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "image" : "image-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Diálogos"
                component={AlertScreen}
                options={{
                    tabBarLabel: "Diálogos",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "alert" : "alert-outline"} size={24} color={color} />,
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
        backgroundColor: "#D0D1D2",
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
