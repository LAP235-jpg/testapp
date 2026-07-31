import { ScrollView, View, Pressable, Image, StyleSheet, Text } from "react-native";
import { router, Href } from "expo-router";

type Fase = {
  id: number;
  rota: Href;
  lado: "left" | "center" | "right";
};

const fases: Fase[] = [
  {
    id: 1,
    rota: "/fases/fase1",
    lado: "center",
  },

  {
    id: 2,
    rota: "/fases/fase2",
    lado: "left",
  },

  {
    id: 3,
    rota: "/fases/fase3",
    lado: "center",
  },

  {
    id: 4,
    rota: "/fases/fase4",
    lado: "right",
  },
  {
	id: 5,
	rota: "/fases/fase4",
	lado: "center",
  }
];

export default function Mundo() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {fases.map((fase) => (
        <Pressable
    key={fase.id}
    onPress={() => router.push(fase.rota)}
    style={[
        styles.botao,
        fase.lado === "left" && { alignSelf: "flex-start" },
        fase.lado === "center" && { alignSelf: "center" },
        fase.lado === "right" && { alignSelf: "flex-end" },
    ]}
>
    <View style={styles.faseContainer}>
        <Image
            source={require("../../assets/images/btnfase.png")}
            style={styles.imagem}
        />

        <Text style={styles.numero}>
            {fase.id}
        </Text>
    </View>
</Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B5B5B",
  },

  content: {
    padding: 80,
    gap: 0,
  },

  botao: {},

  imagem: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
  faseContainer: {
    position: "relative",
},

numero: {
    position: "absolute",

    top: 50,
    left: 0,
    right: 0,

    textAlign: "center",

    fontSize: 30,
    fontWeight: "bold",

    color: "#FFFFFF",
},
});