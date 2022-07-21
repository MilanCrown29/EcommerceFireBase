import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {UseAccount} from '../../hooks/UseAccount';
import {baseStyles} from '../../styles/theme';
import Button from '../Button/Button';

import Inputs from '../Inputs';
import inputStyles from '../Inputs/style';
import loginStyles from './style';

interface LoginProps {
  heading: string;
  subHeading: string;
  signIn: boolean;
}
const Login = (props: LoginProps) => {
  const [toogleCheckBox, setToogleCheckBox] = useState(false);
  const {signInorUp, email, setEmail, password, setPassword, loading} =
    UseAccount();

  const TermsAndPolicy = () => {
    return (
      <View>
        <CheckBox
          disabled={true}
          value={toogleCheckBox}
          onValueChange={newValue => setToogleCheckBox(newValue)}
        />
        <Text style={[baseStyles.body, loginStyles.termsText]}>
          By creating an account, you agree to
          <Text style={[baseStyles.headerSm, loginStyles.termsText]}>
            our Terms & Conditions
          </Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={loginStyles.container}>
      <Text style={[baseStyles.headerLg, loginStyles.heading]}>
        {props.heading}
      </Text>
      <Text style={[baseStyles.headerLg, loginStyles.subHeading]}>
        {props.subHeading}
      </Text>
      <View style={[baseStyles.cardShadow, loginStyles.card]}>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={inputStyles.textInput}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          style={inputStyles.textInput}
          secureTextEntry={true}
        />
        {!props.signIn && <TermsAndPolicy />}
        <Button
          title={props.signIn ? 'SIGN IN' : 'SIGN UP'}
          isLoading={loading}
          onPress={() => {
            signInorUp(props.signIn);
          }}
        />
      </View>
    </View>
  );
};
export default Login;
