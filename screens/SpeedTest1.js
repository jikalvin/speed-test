import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';

const Container = styled(LinearGradient).attrs({
  colors: ['#0a0f24', '#0a0f24'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const GaugeContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const DataUsageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SpeedTest1 = () => {
  return (
    <Container>
      <Header>
        <Text style={{ color: '#fff', fontSize: 24 }}>←</Text>
        <Profile>
          <ProfileImage source={{ uri: 'https://via.placeholder.com/40' }} />
          <Text style={{ color: '#fff', fontSize: 18 }}>Martinez</Text>
        </Profile>
        <Text style={{ color: '#fff', fontSize: 24 }}>→</Text>
      </Header>
      <GaugeContainer>
        <Svg height="200" width="200" viewBox="0 0 200 200">
          <Path
            d="M 10 100 A 90 90 0 0 1 190 100"
            stroke="#6a1b9a"
            strokeWidth="10"
            fill="none"
          />
          <Path
            d="M 10 100 A 90 90 0 0 1 190 100"
            stroke="#fff"
            strokeWidth="10"
            strokeDasharray="10,10"
            fill="none"
          />
        </Svg>
        <Text style={{ color: '#fff', fontSize: 48 }}>12</Text>
        <Text style={{ color: '#6a1b9a', fontSize: 18 }}>Ping</Text>
      </GaugeContainer>
      <DataUsageContainer>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>Data usage</Text>
        <Svg height="100" width="300" viewBox="0 0 300 100">
          <Path
            d="M 0 80 Q 50 20, 100 80 T 200 80 T 300 80"
            stroke="#6a1b9a"
            strokeWidth="2"
            fill="none"
          />
        </Svg>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
          <Text style={{ color: '#fff' }}>Jan</Text>
          <Text style={{ color: '#fff' }}>Feb</Text>
          <Text style={{ color: '#fff' }}>Mar</Text>
          <Text style={{ color: '#6a1b9a' }}>Apr</Text>
          <Text style={{ color: '#fff' }}>May</Text>
        </View>
      </DataUsageContainer>
    </Container>
  );
};

export default SpeedTest1;