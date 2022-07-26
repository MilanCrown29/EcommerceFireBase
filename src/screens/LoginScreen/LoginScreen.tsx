import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet} from 'react-native';
import Button from '../../atom/Button/Button';
import inputStyles from '../../atom/Inputs/style';
import FirebaseUtil from '../../utils/FirebaseUtil';
import loginScreenStyles from './style';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // sign in or sign up
  const [create, setCreate] = useState(false);

  const signIn = () => {
    FirebaseUtil.signIn(email, password).catch(e => {
      console.log(e);
      alert('Email/ password is wrong');
    });
  };
  const signUp = () => {
    FirebaseUtil.signUp(email, password).catch(e => {
      console.log(e);
      alert('Somthing went wrong');
    });
  };

  return (
    <ScrollView contentContainerStyle={loginScreenStyles.container}>
      <View style={styles.container}>
        <Text
          style={{
            marginBottom: 50,
            fontSize: 20,
            textAlign: 'center',
            fontWeight: '500',
          }}>
          WELCOME Here!!
        </Text>

        <TextInput
          placeholder="Enter your Email"
          onChangeText={setEmail}
          value={email}
          style={inputStyles.textInput}
        />
        <TextInput
          placeholder="Enter your Password"
          onChangeText={setPassword}
          value={password}
          style={inputStyles.textInput}
          secureTextEntry={true}
        />

        {create ? (
          <>
            <Button title="Sign Up" onPress={() => signUp()} />
            <Text style={styles.text} onPress={() => setCreate(false)}>
              Sign In
            </Text>
          </>
        ) : (
          <>
            <Button title="Sign In" onPress={() => signIn()} />
            <Text style={styles.text} onPress={() => setCreate(true)}>
              Create an Account?
            </Text>
            
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    color: 'grey',
    marginTop: 20,
  },
});
