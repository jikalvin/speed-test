// components/SpeedTest.js

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import ScanningAnimation from './ScanningAnimation';

const SpeedTest = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [approxSpeed, setApproxSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  const testFiles = [
    // 'http://ipv4.download.thinkbroadband.com/100MB.zip',
    'http://ipv4.download.thinkbroadband.com/1MB.zip',
    'http://ipv4.download.thinkbroadband.com/1MB.zip',
    'http://ipv4.download.thinkbroadband.com/1MB.zip',
    'http://ipv4.download.thinkbroadband.com/1MB.zip'
  ];

  const getSpeed = async () => {
    setLoading(true);
    setError(null);
    setDownloadSpeed(null);
    setApproxSpeed(null);

    try {
      const startTime = Date.now();
      let downloadedBytes = 0;

      const requests = testFiles.map((file) => {
        return axios.get(file, { responseType: 'blob', onDownloadProgress: (progressEvent) => {
          downloadedBytes += progressEvent.loaded;
          const currentTime = Date.now();
          const duration = (currentTime - startTime) / 1000; // in seconds
          const speed = downloadedBytes * 8 / duration / (1024 * 1024); // speed in Mbps
          setApproxSpeed(speed);
        }});
      });

      await Promise.all(requests);

      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000; // in seconds

      const totalSizeInBits = testFiles.length * 1 * 1024 * 1024 * 8; // 1MB per file * 8 bits
      const speed = totalSizeInBits / duration / (1024 * 1024); // speed in Mbps

      setDownloadSpeed(speed);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      clearInterval(intervalRef.current);
    }
  };

  return (
    <View style={styles.container}>
      <ScanningAnimation onPress={getSpeed} loading={loading} />
      {approxSpeed !== null && <Text style={styles.approxText}>Approx Speed: {approxSpeed.toFixed(2)} Mbps</Text>}
      {downloadSpeed !== null && <Text style={styles.resultText}>Final Speed: {downloadSpeed.toFixed(2)} Mbps</Text>}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  approxText: { marginTop: 10, fontSize: 16, color: '#3498db' },
  resultText: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
  errorText: { color: 'red', marginTop: 10 },
});

export default SpeedTest;


