import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

var x = 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d5d5d',
  },
  conteinerb :{
backgroundColor: '#78caf5', 

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
  barra:{
  height: 60,
  width : 350,
    backgroundColor: '#78caf5',
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: 10, // ajuda no Android]
    borderRadius: 15,
   marginBottom: 500
  },
  
});

export default function Index() {
  const router = useRouter();

  function nivel1(){
    router.push('/niveis/nivel1')
  }
 
  return (
   <View style = {styles.container}>
    <view style={styles.barra}>
  <text>hello world</text>
    </view>

    <Pressable onPress={nivel1}>
      <Image
             source={require('../assets/images/botaoprojete.png')}
             style={{ width: 150, height: 150, marginBottom: 0, position: 'absolute', top: -450, left: 10 }}
            />
    </Pressable>

   </View>
  );
}