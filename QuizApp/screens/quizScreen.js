import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";

import questions from "../data/questions";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizScreen({ navigation }) {
  const [quizQuestions] = useState(() => shuffle(questions).slice(0, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = quizQuestions[currentIndex];

  function selectAnswer(answer) {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(answer);

    if (answer === currentQuestion.answer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (currentIndex === quizQuestions.length - 1) {
      const finalScore =
        score + (selectedAnswer === currentQuestion.answer ? 1 : 0);

      navigation.replace("Results", {
        score: finalScore,
        total: quizQuestions.length,
      });

      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setSelectedAnswer(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progress}>
          Question {currentIndex + 1} of {quizQuestions.length}
        </Text>

        <Text style={styles.score}>Score: {score}</Text>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${((currentIndex + 1) / quizQuestions.length) * 100}%`,
            },
          ]}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.questionNumber}>
          JAVASCRIPT QUESTION
        </Text>

        <Text style={styles.question}>
          {currentQuestion.question}
        </Text>
      </View>

      <View style={styles.answers}>
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentQuestion.answer;

          let buttonStyle = styles.answerButton;
          let textStyle = styles.answerText;

          if (selectedAnswer !== null && isCorrect) {
            buttonStyle = [styles.answerButton, styles.correct];
            textStyle = [styles.answerText, styles.correctText];
          } else if (isSelected) {
            buttonStyle = [styles.answerButton, styles.wrong];
            textStyle = [styles.answerText, styles.wrongText];
          }

          return (
            <Pressable
              key={option}
              style={buttonStyle}
              onPress={() => selectAnswer(option)}
            >
              <Text style={textStyle}>{option}</Text>
            </Pressable>
          );
        })}
      </View>

      {selectedAnswer !== null && (
        <View style={styles.feedback}>
          <Text style={styles.feedbackTitle}>
            {selectedAnswer === currentQuestion.answer
              ? "Correct!"
              : "Not quite!"}
          </Text>

          <Text style={styles.feedbackText}>
            {currentQuestion.explanation}
          </Text>
        </View>
      )}

      <Pressable
        style={[
          styles.nextButton,
          selectedAnswer === null && styles.disabled,
        ]}
        disabled={selectedAnswer === null}
        onPress={nextQuestion}
      >
        <Text style={styles.nextText}>
          {currentIndex === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
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
  },

  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progress: {
    fontSize: 15,
    fontWeight: "700",
    color: "#475569",
  },

  score: {
    fontSize: 15,
    fontWeight: "800",
    color: "#2563eb",
  },

  progressBar: {
    height: 8,
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    marginTop: 12,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 10,
  },

  card: {
    backgroundColor: "#172554",
    borderRadius: 24,
    padding: 25,
    marginTop: 25,
    minHeight: 210,
    justifyContent: "center",
  },

  questionNumber: {
    color: "#93c5fd",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 15,
  },

  question: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 34,
  },

  answers: {
    marginTop: 20,
    gap: 12,
  },

  answerButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    padding: 17,
    borderRadius: 15,
  },

  answerText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#334155",
  },

  correct: {
    backgroundColor: "#dcfce7",
    borderColor: "#22c55e",
  },

  correctText: {
    color: "#166534",
  },

  wrong: {
    backgroundColor: "#fee2e2",
    borderColor: "#ef4444",
  },

  wrongText: {
    color: "#991b1b",
  },

  feedback: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },

  feedbackTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#172554",
  },

  feedbackText: {
    color: "#64748b",
    marginTop: 5,
    lineHeight: 20,
  },

  nextButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 17,
    borderRadius: 15,
    alignItems: "center",
    marginTop: "auto",
  },

  disabled: {
    backgroundColor: "#cbd5e1",
  },

  nextText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
  },
});