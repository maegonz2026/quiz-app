import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

export default function CreateDeckScreen({ navigation }) {
  const [deckName, setDeckName] = useState("");

  function saveDeck() {
    if (!deckName.trim()) {
      Alert.alert("Missing name", "Please enter a deck name.");
      return;
    }

    Alert.alert(
      "Deck Created",
      `${deckName} has been created successfully!`,
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Custom Deck</Text>

      <Text style={styles.label}>Deck Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Example: JavaScript ES6"
        value={deckName}
        onChangeText={setDeckName}
      />

      <Pressable style={styles.button} onPress={saveDeck}>
        <Text style={styles.buttonText}>Save Deck</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#172554",
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "800",
    color: "#334155",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 15,
    padding: 17,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
  },
});