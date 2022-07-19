import React, {useEffect, useState} from 'react';
import {View,Text} from 'react-native';
import { UseMounted } from '../../hooks/UseMounted';
import { Product } from '../../Interface';
import MainGrid from '../../molecules/MainGrid/MainGrid';
import { getProducts } from '../../utils/FirestoreUtil';
import LoadingScreen from '../LoadingScreen/LoadingScreen';


export default function HomeScreen() {
  const [data, setData] = useState<Product[]>([]);
  const isMounted = UseMounted();

  useEffect(() => {
    async function init() {
      const products = await getProducts();
      isMounted && setData(products);
    }
    init();
  }, []);

  if (!data || data.length <= 1) {
    return <MainGrid />;
  } else
    return (
      <View>
       <LoadingScreen/>
      </View>
    );
}