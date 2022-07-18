import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import AppStack from './src/navigation/AppStack';
import LoginProvider from './src/utils/LoginProvider';

export default function App() {
  return (
    <LoginProvider>
      <AppStack/>
    </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});