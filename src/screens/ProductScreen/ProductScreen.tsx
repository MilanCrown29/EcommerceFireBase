import React, { useContext } from 'react';
import {View, Text, ScrollView,FlatList ,Image, SafeAreaView, TouchableOpacity} from 'react-native';


import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../atom/Button/Button';

import { product } from '../../constants/product';
import gridStyles from '../../molecules/MainGrid/styles';
import { baseStyles, colors } from '../../styles/theme';
import productStyles from './style';

const ProductScreen = ({navigation}: {navigation: any}) => {
  const handlePress = () => {
    // try {
    //   addToCart(user, product.id);
    // } catch (error) {
    //   Alert.alert('Something Went Wrong');
    // }
  };
 
  return (
    <>
    <View style={baseStyles.containerJustify}>
     <Button
        style={productStyles.backButton}
        size={40}
        iconName="arrow-back-outline"
        background={colors.white}
        onPress={() => navigation.goBack('HomeScreen')}
      />
    <SafeAreaView>
    <FlatList
      data={product}
      
      keyExtractor={item=>item.id.toString()}
      contentContainerStyle={{paddingBottom:20}}
      renderItem={({item}) => (
        <View>
        <View style={productStyles.rightButton}>
          <Button
            style={productStyles.share}
            size={50}
            iconName="share-social-outline"
            background={colors.yellow}
            onPress={handlePress}
          />
          <Button
            style={productStyles.share}
            size={50}
            iconName="heart-outline"
            background={colors.yellow}
            onPress={handlePress}
          />
        </View>
        <View style={[baseStyles.container]}>
          <Image
            source={{uri: item.image}}
            style={productStyles.image}
          />
          <Text style={[baseStyles.headerLg, productStyles.title]}>
            {item.title}
          </Text>
          <Text style={[baseStyles.headerLg, productStyles.price]}>
            {item.price}
          </Text>
          <Button title="ADD TO CART" onPress={handlePress} />
          <View style={baseStyles.line}/>
          <Text style={[baseStyles.headerLg, productStyles.description]}>
            {item.description}
          </Text>
        </View>
      </View>
      )}
    />
  </SafeAreaView>
  </View>
  </>
  );
};
export default ProductScreen;