import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainNavigation from './navigation/main';

export default function App() {
  return (
      <MainNavigation />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});
