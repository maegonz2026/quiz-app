import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.logo}>JS</Text>

        <Text style={styles.title}>JavaScript</Text>

        <Text style={styles.subtitle}>Mastery Quiz</Text>

        <Text style={styles.description}>
          Learn JavaScript through quizzes, flashcards, and study decks.
        </Text>
      </View>

      <View style={styles.menu}>

        <Pressable
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.primaryText}>
            Start Quiz
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Decks")}
        >
          <Text style={styles.secondaryText}>
            Study Decks
          </Text>
        </Pressable>

      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          10 Random Javascript Questions
        </Text>

        <Text style={styles.infoText}>
          Test your knowledge of JavaScript fundamentals and modern concepts.
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 24,
    justifyContent: "space-between",
  },

  header: {
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 25,
    backgroundColor: "#facc15",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 36,
    fontWeight: "900",
    color: "#172554",
    overflow: "hidden",
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#172554",
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2563eb",
    marginTop: 2,
  },

  description: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    maxWidth: 350,
  },

  menu: {
    gap: 14,
  },

  primaryButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  primaryText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },

  secondaryButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dbeafe",
  },

  secondaryText: {
    color: "#1e40af",
    fontSize: 18,
    fontWeight: "700",
  },

  infoCard: {
    backgroundColor: "#eff6ff",
    padding: 20,
    borderRadius: 18,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#172554",
  },

  infoText: {
    color: "#64748b",
    marginTop: 5,
    lineHeight: 21,
  },
});