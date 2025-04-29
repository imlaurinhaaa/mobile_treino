import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import LayoutScreen from "../screens/basic/EstruturaLayoutScreen";
import TextScreen from "../screens/basic/TextScreen";
import ButtonScreen from "../screens/basic/ButtonScreen";
import ComponentScreen from "../screens/basic/ComponentScreen";

const Tab = createBottomTabNavigator();

export default function BasicTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Layout"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarActiveTintColor: "#1D4ED8",
                tabBarInactiveTintColor: "#6B7280",
            }}
        >
            <Tab.Screen
                name="Layout"
                component={LayoutScreen}
                options={{
                    tabBarLabel: "Layout",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "grid" : "grid-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Text"
                component={TextScreen}
                options={{
                    tabBarLabel: "Texto",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "text" : "text-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Button"
                component={ButtonScreen}
                options={{
                    tabBarLabel: "Botão",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "radio-button-on" : "radio-button-off"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Component"
                component={ComponentScreen}
                options={{
                    tabBarLabel: "Componentes",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "cube" : "cube-outline"} size={24} color={color} />,
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
