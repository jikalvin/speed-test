import React from 'react';
import { StyleSheet, View } from 'react-native';
import SpeedTest from './screens/SpeedTest';

export default function App() {
  return (
    <View style={styles.container}>
      <SpeedTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});
