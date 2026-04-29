import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';
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
    router.push('/menuP');
  } else {
    alert('Credenciais inválidas. Tente novamente.');
  }
};
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Gemini.png')} 
      style={{ width: 400, height: 200, marginBottom: 20 }} />
      <TextInput style={styles.input} 
      placeholder="username" 
      value={usuario} 
      onChangeText={setUsuario} 
      />
      <TextInput style={styles.input} 
      placeholder="password" 
      value={senha} 
      secureTextEntry
      onChangeText={setSenha} 
      />
      <Pressable style={styles.conteinerb} onPress={login}>
        <Text style={{ color: '#ffffff', fontSize: 16 }}>acessar</Text>
      </Pressable>
      <Pressable style={{height: 30, width: '20%', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ffffff', alignItems: 'center', borderRadius: 0, marginTop: 10}} onPress={() => alert('Cadastro não implementado')}>
        <Text style={{ color: '#ffffff', fontSize: 16 }}>cadastro</Text>
      </Pressable>
    </View>
  );
}