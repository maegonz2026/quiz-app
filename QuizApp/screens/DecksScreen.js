import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";

const decks = [
  {
    id: "1",
    title: "JavaScript Basics",
    description: "Variables, types, and operators",
    count: "10 cards",
    questionIds: [
      "1", "2", "7", "8", "9",
      "10", "11", "12", "13", "32"
    ],
  },
  {
    id: "2",
    title: "Functions",
    description: "Functions, parameters, and return values",
    count: "8 cards",
    questionIds: [
      "10", "17", "18", "20",
      "23", "26", "27", "28"
    ],
  },
  {
    id: "3",
    title: "Arrays",
    description: "Array methods and manipulation",
    count: "8 cards",
    questionIds: [
      "3", "4", "5", "6",
      "14", "15", "16", "30"
    ],
  },
  {
    id: "4",
    title: "Modern JavaScript",
    description: "ES6+, promises, async and await",
    count: "9 cards",
    questionIds: [
      "17", "24", "25", "27", "28",
      "29", "31", "33", "35"
    ],
  },
];

export default function DecksScreen({ navigation }) {
  function openDeck(deck) {
    navigation.navigate("Flashcards", {
      deck: deck,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Study Decks</Text>

        <Text style={styles.subtitle}>
          Choose a topic to start studying.
        </Text>
      </View>

      <FlatList
        data={decks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => openDeck(item)}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text style={styles.cardDescription}>
                {item.description}
              </Text>

              <Text style={styles.count}>
                {item.count}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
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

  top: {
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#172554",
  },

  subtitle: {
    color: "#64748b",
    marginTop: 5,
    fontSize: 15,
  },

  list: {
    gap: 12,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#172554",
  },

  cardDescription: {
    color: "#64748b",
    marginTop: 5,
  },

  count: {
    color: "#2563eb",
    fontWeight: "700",
    marginTop: 10,
  },

  arrow: {
    fontSize: 35,
    color: "#94a3b8",
    marginLeft: 10,
  },
});