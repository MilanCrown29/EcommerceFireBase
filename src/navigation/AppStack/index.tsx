import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import LoadingScreen from '../../screens/LoadingScreen/LoadingScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import { LoginContext } from '../../utils/LoginProvider';


const Stack = createStackNavigator();
export default function AppStack() {
  const { user, isLoading } = useContext(LoginContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="loading"
            options={{ headerShown: false }}
            component={LoadingScreen}
          />
        ) : user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="signin" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}