import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const scores = [
  { id: "1", score: "10 / 10" },
  { id: "2", score: "9 / 10" },
  { id: "3", score: "8 / 10" },
];

export default function HighScoresScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>High Scores</Text>

      <FlatList
        data={scores}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.rank}>#{index + 1}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#172554",
    marginBottom: 20,
  },

  row: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  rank: {
    fontSize: 18,
    fontWeight: "800",
    color: "#64748b",
  },

  score: {
    fontSize: 20,
    fontWeight: "900",
    color: "#2563eb",
  },
});