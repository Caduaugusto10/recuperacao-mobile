import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "./navigation/MoviesNavigator";


export default function App() {
    return (
        <NavigationContainer>
            <Movies />
        </NavigationContainer>
    );
}