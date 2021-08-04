import React from 'react';
import { View, Text, Button } from 'react-native';

const Onboarding = ({ navigation }) => (
  <View>
    <Text>Welcome</Text>
    <Button onPress={() => navigation.navigate('Minesweeper')} title="Play" />
  </View>
);

export default Onboarding;
