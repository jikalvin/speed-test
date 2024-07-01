import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const SpeedTestApp = () => {
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [speedResult, setSpeedResult] = useState(null);
  const [approxSpeed, setApproxSpeed] = useState(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const runSpeedTest = () => {
    setIsTestRunning(true);
    setApproxSpeed(null);
    setSpeedResult(null);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    // Simulate speed test
    const interval = setInterval(() => {
      const simulatedSpeed = Math.random() * 2; // Speed between 0 and 2 Mbps
      setApproxSpeed(simulatedSpeed);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsTestRunning(false);
      setSpeedResult(approxSpeed);
    }, 3000);
  };

  const rotateData = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  useEffect(() => {
    if (!isTestRunning) {
      animatedValue.setValue(0);
    }
  }, [isTestRunning]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Internet Speed Test</Text>

        <TouchableOpacity onPress={runSpeedTest} disabled={isTestRunning}>
          <View style={styles.speedMeter}>
            <Animated.View style={[styles.needle, { transform: [{ rotate: rotateData }] }]} />
            <Text style={styles.speedText}>
              {isTestRunning ? 'Testing...' : speedResult ? `${speedResult.toFixed(2)} Mbps` : 'Tap to Test'}
            </Text>
          </View>
        </TouchableOpacity>

        {approxSpeed !== null && <Text style={styles.approxText}>Approx Speed: {approxSpeed.toFixed(2)} Mbps</Text>}
        {speedResult !== null && <Text style={styles.resultText}>Final Speed: {speedResult.toFixed(2)} Mbps</Text>}

        <Text style={styles.dataUsageTitle}>Data Usage</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#0a0f24',
            backgroundGradientFrom: '#1e2923',
            backgroundGradientTo: '#08130D',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={styles.chart}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Data')}>
          <Text style={styles.buttonText}>Buy Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#0a0f24',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: screenWidth,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  speedMeter: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#3e3e72',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: '#1e1e2f',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  needle: {
    width: 4,
    height: 100,
    backgroundColor: '#8080ff',
    position: 'absolute',
    bottom: '50%',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  speedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  approxText: {
    marginTop: 10,
    fontSize: 16,
    color: '#3498db',
  },
  resultText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  dataUsageTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  button: {
    backgroundColor: '#3e3e72',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: "90%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SpeedTestApp;
