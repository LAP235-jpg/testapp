import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d5d5d',
  },
  conteinerb :{
backgroundColor: '#78caf5', // verde Duolingo 🟢

    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 15,

     shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 20,
  },
  botaoPressionado: {
  transform: [{ scale: 0.95 }],
  opacity: 0.8,
},
  input: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '60%',
    backgroundColor: '#ffffff',
  },
  
});

export default function Index() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<string>('');
const [senha, setSenha] = useState<string>('');
const login = () => {
  if (usuario === 'L' && senha === '1') {
    console.log('Usuário ou senha incorretos');
  } else {
    Alert.alert('te');
  }
};
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Gemini.png')} 
      style={{ width: 400, height: 200, marginBottom: 20 }} />
      <Pressable onPress={login}>
       <Image
        source={require('../assets/images/botaoprojete.png')}
        style={{ width: 400, height: 300, marginBottom: 20 }}
       />
      </Pressable>
    </View>
  );
}