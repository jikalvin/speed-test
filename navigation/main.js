import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpeedTest from '../screens/SpeedTest';
import SignupScreen from '../screens/Signup';
import SpeedTest1 from '../screens/SpeedTest1';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SpeedTest" component={SpeedTest} options={{ title: 'Speed Test' }} />
        <Stack.Screen name="SpeedTest1" component={SpeedTest1} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
