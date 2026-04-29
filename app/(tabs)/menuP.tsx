import React from 'react';
import { Image, View } from 'react-native';
export default function MenuP() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5d5d5d' }}>
      <Image source={require('../../assets/images/TALKPUP.png')} />
    </View>
  );
}