import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";

export default function ResultsScreen({ navigation, route }) {
  const { score, total } = route.params;

  const percentage = Math.round((score / total) * 100);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>✓</Text>

        <Text style={styles.title}>Quiz Complete!</Text>

        <Text style={styles.subtitle}>
          Here is your final score
        </Text>

        <View style={styles.scoreCard}>
          <Text style={styles.score}>
            {score}/{total}
          </Text>

          <Text style={styles.percentage}>
            {percentage}%
          </Text>
        </View>

        <Text style={styles.message}>
          {percentage >= 80
            ? "Excellent JavaScript knowledge!"
            : percentage >= 60
            ? "Good job! Keep studying."
            : "Keep practicing and try again!"}
        </Text>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => navigation.replace("Quiz")}
        >
          <Text style={styles.primaryText}>Try Again</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.secondaryText}>Back to Home</Text>
        </Pressable>
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

  content: {
    alignItems: "center",
    marginTop: 60,
  },

  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#dcfce7",
    color: "#16a34a",
    fontSize: 45,
    fontWeight: "900",
    textAlign: "center",
    textAlignVertical: "center",
    paddingTop: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#172554",
    marginTop: 25,
  },

  subtitle: {
    color: "#64748b",
    fontSize: 16,
    marginTop: 8,
  },

  scoreCard: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 30,
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  score: {
    fontSize: 52,
    fontWeight: "900",
    color: "#2563eb",
  },

  percentage: {
    fontSize: 20,
    fontWeight: "700",
    color: "#64748b",
  },

  message: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#334155",
    marginTop: 25,
  },

  buttons: {
    gap: 12,
  },

  primaryButton: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  primaryText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
  },

  secondaryButton: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },

  secondaryText: {
    color: "#1e40af",
    fontSize: 17,
    fontWeight: "800",
  },
});