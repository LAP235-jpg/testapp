import { Stack } from "expo-router";
import { WorldProvider } from "../context/WorldContext";

export default function RootLayout() {
  return (
    <WorldProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="fases" />
        <Stack.Screen name="perfil" />
      </Stack>
    </WorldProvider>
  );
}