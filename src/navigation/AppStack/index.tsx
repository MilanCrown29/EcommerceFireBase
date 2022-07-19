import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import LoadingScreen from '../../screens/LoadingScreen/LoadingScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import ProductScreen from '../../screens/ProductScreen/ProductScreen';
import {baseStyles} from '../../styles/theme';
import {LoginContext} from '../../utils/LoginProvider';
import MainStack from '../MainStack';

const Stack = createStackNavigator();
export default function AppStack() {
  const {user, isLoading} = useContext(LoginContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="loading"
            options={{headerShown: false}}
            component={LoadingScreen}
          />
        ) : user ? (
          <>
            <Stack.Screen
              name="Shoppers"
              component={MainStack}
              options={{
                title: 'SHOPPERS',
                headerTitleStyle: baseStyles.brandTitle,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="signin"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
