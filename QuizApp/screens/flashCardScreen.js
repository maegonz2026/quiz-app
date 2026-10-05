import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import questions from "../data/questions";

export default function FlashcardScreen({ route }) {
  const { deck } = route.params;

  const deckQuestions = questions.filter((question) =>
    deck.questionIds.includes(question.id)
  );

  const [cards] = useState(() =>
    [...deckQuestions].sort(() => Math.random() - 0.5)
  );

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[index];

  function nextCard() {
    setFlipped(false);

    setIndex((previous) =>
      previous === cards.length - 1 ? 0 : previous + 1
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.deckTitle}>
        {deck.title}
      </Text>

      <Text style={styles.counter}>
        Card {index + 1} of {cards.length}
      </Text>

      <Pressable
        style={styles.card}
        onPress={() => setFlipped((previous) => !previous)}
      >
        <Text style={styles.label}>
          {flipped ? "ANSWER" : "QUESTION"}
        </Text>

        <Text style={styles.text}>
          {flipped ? card.answer : card.question}
        </Text>

        {flipped && (
          <Text style={styles.explanation}>
            {card.explanation}
          </Text>
        )}

        <Text style={styles.tap}>
          Tap card to{" "}
          {flipped ? "see question" : "flip answer"}
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={nextCard}
      >
        <Text style={styles.buttonText}>
          Next Card
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
    justifyContent: "center",
  },

  deckTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "900",
    color: "#172554",
    marginBottom: 5,
  },

  counter: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#64748b",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#172554",
    minHeight: 400,
    borderRadius: 28,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    color: "#93c5fd",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 2,
  },

  text: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 35,
  },

  explanation: {
    color: "#cbd5e1",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 20,
  },

  tap: {
    color: "#94a3b8",
    marginTop: 30,
    fontSize: 13,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 17,
  },
});