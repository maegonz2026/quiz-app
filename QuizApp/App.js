import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DecksScreen from "./screens/DecksScreen";
import CreateDeckScreen from "./screens/CreateDeckScreen";
import FlashcardScreen from "./screens/FlashcardScreen";
import QuizScreen from "./screens/QuizScreen";
import ResultsScreen from "./screens/ResultsScreen";
import HighScoresScreen from "./screens/HighScoresScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          name="CreateDeck"
          component={CreateDeckScreen}
          options={{ title: "Create Study Deck" }}
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

        <Stack.Screen
          name="HighScores"
          component={HighScoresScreen}
          options={{ title: "High Scores" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}