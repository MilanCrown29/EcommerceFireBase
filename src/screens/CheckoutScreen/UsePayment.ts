import {useStripe} from '@stripe/stripe-react-native';
import {useContext, useState} from 'react';
import {Alert} from 'react-native';
import { Cart } from '../../Interface';
import {CHECKOUT_GET_PAYMENT_INTENT, post} from '../../utils/BackendUtil';
import {LoginContext} from '../../utils/LoginProvider';

export default function UsePayment(setList(a:Cart[])=>void) {
  const {user} = useContext(LoginContext);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
const [cartDisabled,setCartDiabled]=useState(false) 

  const getPaymentIntent = () => {
    if (!user) return;
    try {
      let response = await post(user, CHECKOUT_GET_PAYMENT_INTENT);
      const {paymentIntent, ephermalKey, customer} = await response.json();
      const {error} = await initPaymentSheet({
        customerId: customer,
        customerEphemeralKeySecret: ephermalKey,
        paymentIntentClientSecret: paymentIntent,
      });
      if (error) {
        Alert.alert('Stripe Error');
      }
    } catch (e) {
      Alert.alert('could not get payment intent');
    }
  };
  const openPaymentPage=async()=>{
    setCartDiabled(true)
    const paymentIntent=getPaymentIntent();
    setTimeout(async function(){
        const{error}= await presentPaymentSheet({
            clientSecret:paymentIntent
          })
          if (error){
            Alert.alert('Error Code' +error.code);

          }else{
            Alert.alert('Sucess','Your Order is Confirmed')
            setList([])
          }
          setCartDiabled(false)
    });
    
  }
  return {openPaymentPage,cartDisabled};
}
