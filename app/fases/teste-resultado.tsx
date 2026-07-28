import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useWorld } from "../../context/WorldContext";

export default function TesteResultadoScreen() {
  const router = useRouter();
  const { totalXp, totalTimeSeconds, accuracy, resetWorld } = useWorld();

  const accuracyPercent = Math.round(accuracy * 100);

  function formatTime(totalSeconds: number) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    if (h > 0) {
      return `${h}h ${m}m ${s}s`;
    }
    if (m > 0) {
      return `${m}m ${s}s`;
    }
    return `${s}s`;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#222" }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={{ color: "#fff", fontSize: 22, marginBottom: 20 }}>
        TELA DE TESTE - RESULTADOS
      </Text>

      <Text style={{ color: "#fff", fontSize: 16 }}>
        XP total: {totalXp}
      </Text>

      <Text style={{ color: "#fff", fontSize: 16 }}>
        Tempo total: {formatTime(totalTimeSeconds)}
      </Text>

      <Text style={{ color: "#fff", fontSize: 16 }}>
        Acurácia: {accuracyPercent}%
      </Text>

      <Pressable
        onPress={() => {
          resetWorld();
          router.push("/fases");
        }}
        style={{
          marginTop: 20,
          backgroundColor: "#444",
          padding: 12,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "#fff" }}>Resetar e voltar para fases</Text>
      </Pressable>
    </ScrollView>
  );
}