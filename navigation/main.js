import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpeedTest from '../screens/SpeedTest';
import SpeedTest1 from '../screens/SpeedTest1';
import SpeedTestScreen from '../screens/BuyData';
import SignInScreen from '../screens/Signin';
import SignUpScreen from '../screens/Signup';
import { auth } from '../config/firebase';
import { useState, useEffect } from 'react';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthenticatedScreens = () => {
  return (
    <Stack.Navigator initialRouteName="SpeedTest">
      {/* <Stack.Screen name="SpeedTest" component={SpeedTest} options={{ title: 'Speed Test' }} /> */}
      <Stack.Screen name="SpeedTest1" component={SpeedTest1} options={{headerShown:false}} />
      <Stack.Screen name="Data" component={SpeedTestScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

const UnauthenticatedScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={SignInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  const [user, setUser] = useState(null);

  const checkUser = () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = checkUser();
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
        {user ? (
          <AuthenticatedScreens />
        ) : (
          <UnauthenticatedScreens />
        )}
    </NavigationContainer>
  );
};

export default MainNavigation;
