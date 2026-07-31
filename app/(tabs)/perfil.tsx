import { View, Text, StyleSheet } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Meu Perfil
      </Text>

      <Text>
        Tela de perfil funcionando 🚀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
});