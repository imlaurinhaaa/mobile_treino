import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import BasicTabs from "./BasicTabsNavigator";
import IntermediateTabs from "./IntermediateTabsNavigator";
import AdvancedTabs from "./AdvancedTabsNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Básico"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "lightgray",
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#1F2937",
                },
                drawerStyle: {
                    backgroundColor: "#FFFFFF",
                    width: 260,
                },
                drawerActiveTintColor: "#2563EB",
                drawerInactiveTintColor: "#6B7280",
                drawerLabelStyle: {
                    fontSize: 16,
                    marginLeft: -5,
                    fontWeight: "500",
                },
                drawerType: "slide",
                overlayColor: "#00000020",
            }}
        >
            <Drawer.Screen
                name="Básico"
                component={BasicTabs}
                options={{
                    title: "Básico",
                    drawerIcon: ({ focused, color, size }) => <Ionicons name={focused ? "book" : "book-outline"} size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Intermediário"
                component={IntermediateTabs}
                options={{
                    title: "Intermediário",
                    drawerIcon: ({ focused, color, size }) => <Ionicons name={focused ? "book" : "book-outline"} size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Avançado"
                component={AdvancedTabs}
                options={{
                    title: "Avançado",
                    drawerIcon: ({ focused, color, size }) => <Ionicons name={focused ? "book" : "book-outline"} size={size} color={color} />,
                }}
            />
        </Drawer.Navigator>
    );
}
