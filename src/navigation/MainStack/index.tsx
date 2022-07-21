import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {View, Text,} from 'react-native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import {baseStyles} from '../../styles/theme';
import FirebaseUtil from '../../utils/FirebaseUtil';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckoutScreen from '../../screens/CheckoutScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from '../../screens/ProductScreen/ProductScreen';
import Button from '../../atom/Button/Button';
import EmptyCart from '../../molecules/EmtyCard/EmptyCard';

interface MainStackProps {}

const Tab = createBottomTabNavigator();

const MainStack = (props: MainStackProps) => {
  const ProfileScreen = () => {
    return (
      <View style={baseStyles.containerJustify}>
        <Text style={baseStyles.headerLg}>Hi There</Text>
        <Button title="SIGN OUT" onPress={FirebaseUtil.signOut} />
      </View>
    );
  };
  const SettingsStack = createNativeStackNavigator();

  const SettingsStackScreen = () => {
    return (
      <SettingsStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <SettingsStack.Screen name="HomeScreen" component={HomeScreen} />
        <SettingsStack.Screen name="ProductScreen" component={ProductScreen} />
      </SettingsStack.Navigator>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#3F22AB',
        tabBarInactiveTintColor: 'black',
        tabBarIconStyle: {marginTop: 5},
        tabBarShowLabel: false,
        tabBarStyle: {
          overflow: 'visible',
          shadowColor: '#000000',
          shadowOpacity: 0.25,
          shadowRadius: 8,
          shadowOffset: {width: 0, height: 1},
          elevation: 10,
          
        },
      }}>
      <Tab.Screen
        name="Home"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Shoppers"
        component={ProfileScreen}
        options={{
          title: 'SHOPPERS',
          headerTitleAlign: 'center',
          tabBarLabel: 'Profile',
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={EmptyCart}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainStack;
