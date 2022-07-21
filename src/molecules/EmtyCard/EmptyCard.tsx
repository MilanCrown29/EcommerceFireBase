import * as React from 'react';
import {ScrollView, Image, Text, Alert} from 'react-native';
import emptyCartStyles from '.';
import Button from '../../atom/Button/Button';
import { baseStyles } from '../../styles/theme';

interface EmptyCartProps {}
const EmptyCart = (props: EmptyCartProps) => {
  return (
    <ScrollView
      contentContainerStyle={[
        baseStyles.containerJustify,
        emptyCartStyles.container,
      ]}>
      <Image
        style={emptyCartStyles.image}
        source={require('./assets/images/noCart.png')}
      />
      <Text style={[baseStyles.headerLg, emptyCartStyles.heading]}>
        Your cart is empty:({''})
      </Text>
      <Button
        style={emptyCartStyles.button}
        title="Go Back Home"
        onPress={() => Alert.alert('goes back')}></Button>
    </ScrollView>
  );
};
export default EmptyCart;