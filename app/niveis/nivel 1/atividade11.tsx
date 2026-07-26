import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

/**
 * Tipo que representa cada alternativa da pergunta.
 */
type Option = {
  label: string;
  value: string;
};

/**
 * Tipagem das props do componente.
 * Assim você consegue reutilizar a tela em outras perguntas.
 */
type QuizScreenProps = {
  question?: string;
  options?: Option[];
  correctAnswer: string;
  nextRoute: string;
  wrongRoute: string;
};

/**
 * Tela de quiz com seleção, validação e navegação.
 */
export default function QuizScreen({
  question = "identifique qual é vogal",
  options = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "L", value: "l" },
    { label: "k", value: "k" },
  ],
  correctAnswer = "a",
  nextRoute,
  wrongRoute,
}: QuizScreenProps) {
  const router = useRouter();

  // Guarda qual alternativa o usuário selecionou
  const [selected, setSelected] = useState<string | null>(null);

  // Guarda se a resposta foi correta, errada ou ainda não foi verificada
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  // Controla se o botão "PRÓXIMO" deve aparecer
  const showNextButton = feedback !== null;

  // Bloqueia a verificação se o usuário ainda não escolheu uma opção
  const verifyDisabled = useMemo(() => !selected, [selected]);

  /**
   * Função executada quando o usuário toca em "VERIFICAR".
   * Ela define se a resposta foi correta ou errada.
   */
  const handleVerify = () => {
    if (!selected) return;

    const isCorrect = selected === correctAnswer;
    setFeedback(isCorrect ? "correct" : "wrong");
  };

  /**
   * Função executada quando o usuário toca em "PRÓXIMO".
   * Ela navega para a rota correta ou errada, conforme o resultado.
   */
  const handleNext = () => {
    if (feedback === "correct") {
      router.push(nextRoute as never);
      return;
    }

    router.push(wrongRoute as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior com botão de fechar e barra de progresso */}
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text style={styles.closeIcon}>×</Text>
        </Pressable>

        <View style={styles.progressBar} />
      </View>

      <View style={styles.content}>
        {/* Pergunta principal */}
        <Text style={styles.question}>{question}</Text>

        {/* Área das alternativas em grade */}
        <View style={styles.grid}>
          {options.map((item) => {
            const isSelected = selected === item.value;
            const isCorrect = feedback !== null && item.value === correctAnswer;
            const isWrong =
              feedback !== null &&
              isSelected &&
              item.value !== correctAnswer;

            return (
              <Pressable
                key={item.value}
                onPress={() => {
                  // Só permite trocar a seleção antes de verificar
                  if (feedback === null) {
                    setSelected(item.value);
                  }
                }}
                style={({ pressed }) => [
                  styles.optionButton,
                  isSelected && styles.optionSelected,
                  isCorrect && styles.optionCorrect,
                  isWrong && styles.optionWrong,
                  pressed && feedback === null && styles.optionPressed,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.optionTextSelected,
                    isCorrect && styles.optionTextCorrect,
                    isWrong && styles.optionTextWrong,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Mensagem de feedback após verificar */}
        {feedback === "correct" && (
          <Text style={styles.correctMessage}>Resposta correta!</Text>
        )}

        {feedback === "wrong" && (
          <Text style={styles.wrongMessage}>Resposta errada.</Text>
        )}

        {/* Botão de verificar */}
        <Pressable
          onPress={handleVerify}
          disabled={verifyDisabled || feedback !== null}
          style={({ pressed }) => [
            styles.verifyButton,
            verifyDisabled && styles.verifyButtonDisabled,
            pressed && !verifyDisabled && feedback === null && styles.verifyButtonPressed,
          ]}
        >
          <Text style={styles.verifyText}>VERIFICAR</Text>
        </Pressable>

        {/* Botão PRÓXIMO aparece somente depois de verificar */}
        {showNextButton && (
          <Pressable
            onPress={handleNext}
            style={({ pressed }) => [
              styles.nextButton,
              pressed && styles.nextButtonPressed,
            ]}
          >
            <Text style={styles.nextText}>PRÓXIMO</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B5B5B",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  closeIcon: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 30,
    marginRight: 12,
    marginTop: -2,
  },

  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
  },

  question: {
    color: "#FFFFFF",
    fontSize: 32,
    textAlign: "center",
    marginBottom: 55,
  },

  grid: {
    width: "100%",
    paddingHorizontal: 26,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 26,
  },

  optionButton: {
    width: 134,
    height: 57,
    backgroundColor: "#D9D9D9",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  optionPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  optionSelected: {
    borderWidth: 2,
    borderColor: "#1CC5D3",
  },

  optionCorrect: {
    backgroundColor: "#7CDB8A",
    borderWidth: 2,
    borderColor: "#2E9E45",
  },

  optionWrong: {
    backgroundColor: "#F28B82",
    borderWidth: 2,
    borderColor: "#D64545",
  },

  optionText: {
    color: "#111111",
    fontSize: 28,
  },

  optionTextSelected: {
    fontWeight: "600",
  },

  optionTextCorrect: {
    color: "#0F3D16",
  },

  optionTextWrong: {
    color: "#5A1414",
  },

  correctMessage: {
    marginTop: 22,
    color: "#7CDB8A",
    fontSize: 18,
    fontWeight: "600",
  },

  wrongMessage: {
    marginTop: 22,
    color: "#F28B82",
    fontSize: 18,
    fontWeight: "600",
  },

  verifyButton: {
    marginTop: 28,
    width: 241,
    height: 41,
    borderRadius: 21,
    backgroundColor: "#1CC5D3",
    justifyContent: "center",
    alignItems: "center",
  },

  verifyButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  verifyButtonDisabled: {
    opacity: 0.45,
  },

  verifyText: {
    color: "#111111",
    fontSize: 22,
    fontWeight: "500",
  },

  nextButton: {
    marginTop: 14,
    width: 241,
    height: 41,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  nextButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  nextText: {
    color: "#111111",
    fontSize: 22,
    fontWeight: "500",
  },
});