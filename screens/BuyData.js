import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SpeedTestScreen = () => {
  const dialUSSD = () => {
    const ussdCode = '*157%23';
    Linking.openURL(`tel:${ussdCode}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{'<'}</Text>
        <Text style={styles.headerText}>{'>'}</Text>
      </View>

      <View style={styles.speedCard}>
        <View style={styles.speedColumn}>
          <Text style={styles.speedLabel}>Download ↓</Text>
          <Text style={styles.speedValue}>68</Text>
        </View>
        <View style={styles.speedColumn}>
          <Text style={styles.speedLabel}>Upload ↑</Text>
          <Text style={styles.speedValue}>72</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Select package</Text>

      <View style={styles.packageContainer}>
        <View style={styles.packageCard}>
          <Text style={styles.packageLetter}>100MB</Text>
          <TouchableOpacity style={styles.buyButton} onPress={dialUSSD}>
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.packageCard}>
          <Text style={styles.packageLetter}>1GB</Text>
          <TouchableOpacity style={styles.buyButton} onPress={dialUSSD}>
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.balanceTitle}>Your balance</Text>
      <Text style={styles.balanceValue}>0 MB</Text>

      <Text style={styles.packageTitle}>Active package</Text>
      <Text style={styles.packageValue}>No active package</Text>
      <LinearGradient
        colors={['#8a2be2', '#4169e1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  speedCard: {
    flexDirection: 'row',
    backgroundColor: '#1e3a5f',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  speedColumn: {
    flex: 1,
    alignItems: 'center',
  },
  speedLabel: {
    color: '#4ade80',
    fontSize: 16,
    marginBottom: 5,
  },
  speedValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  packageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  packageCard: {
    backgroundColor: '#1e3a5f',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '48%',
  },
  packageLetter: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#8a2be2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
  },
  balanceTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
  },
  balanceValue: {
    color: '#8a2be2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  packageTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
  },
  packageValue: {
    color: '#8a2be2',
    fontSize: 18,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
});

export default SpeedTestScreen;
