import * as React from 'react';
import {View, Text, FlatList,Button} from 'react-native';
import { product } from '../../constants/product';
import { baseStyles } from '../../styles/theme';
import checkoutStyles from './style';



interface CheckoutScreenProps {}

 const CheckoutScreen = (props: CheckoutScreenProps) => {
// //   const {list, setList, price, cartLoading} = useCart();
// //   const {openPaymentPage, cartDisabled} = UsePayment(setList);

//   const ListFooter = ({item}) => {
//     return (
//       <View>
//         <View style={baseStyles.line} />
//         <View style={checkoutStyles.statement}>
//           <Text style={baseStyles.headerMd}>Total</Text>
//           <Text style={baseStyles.headerMd}>{}</Text>
//         </View>
//         <View style={baseStyles.line} />
//        <Button title='CHECK OUT' />
//       </View>
//     );
//   };
//   if (!cartLoading && list.length <= 0) {
//     return (
//       <View>
//         <Text>Empty Cart</Text>
//       </View>
//     );
//   } else if (cartLoading) {
//     return <LoadingScreen />;
//   } else {
    return (
        <Text>ho</Text>
    //   <FlatList
    //     data={product}
     
    //     keyExtractor={item => item.id.toString()}
    //     contentContainerStyle={{paddingBottom: 100}}
    //     ListFooterComponent={ListFooter}
    //     style={baseStyles.container}
    //   />
    );
    // }
};

export default CheckoutScreen;