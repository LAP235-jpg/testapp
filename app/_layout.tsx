import React from "react";
import { Stack } from "expo-router";
import { WorldProvider } from "../context/WorldContext";

export default function RootLayout() {
  return (
    <WorldProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </WorldProvider>
  );
}