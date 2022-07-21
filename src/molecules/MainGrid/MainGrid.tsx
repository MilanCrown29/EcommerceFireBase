import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';

import gridStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {product} from '../../constants/product';
import {baseStyles} from '../../styles/theme';

const MainGrid = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductScreen');
  };

  return (
    <SafeAreaView>
      <FlatList
        data={product}
        numColumns={2}
        style={gridStyles.grid}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[gridStyles.card, baseStyles.buttonShadow]}
            onPress={handlePress}>
            <Image source={{uri: item.image}} style={gridStyles.image} />
            <View style={gridStyles.cardDesc}>
              <Text style={[gridStyles.cardTitle, baseStyles.headerSm]}>
                {item.title}
              </Text>
              <Text style={[baseStyles.headerSm]}>$ {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
export default MainGrid;
