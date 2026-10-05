import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DecksScreen from "./screens/DecksScreen";
import FlashcardScreen from "./screens/FlashcardScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultsScreen from "./screens/ResultsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#172554",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Decks"
          component={DecksScreen}
          options={{ title: "Study Decks" }}
        />

        <Stack.Screen
          name="Flashcards"
          component={FlashcardScreen}
          options={{ title: "Flashcards" }}
        />

        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ title: "JavaScript Quiz" }}
        />

        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            title: "Quiz Results",
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}