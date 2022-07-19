import firestore from '@react-native-firebase/firestore';
import {Product} from '../Interface';

const PRODUCT_COLLECTION = 'product';

export async function getProducts(ids?: number[]): Promise<Product[]> {
  try {
    if (ids && ids.length > 0) {
      const products = await firestore()
        .collection(PRODUCT_COLLECTION)
        .where('id', 'in', ids)
        .get();
      return products.docs.map(doc => doc.data()) as Product[];
    } else {
      const products = await firestore().collection(PRODUCT_COLLECTION).get();
      return products.docs.map(doc => doc.data()) as Product[];
    }
  } catch (error) {
    console.log(error);
  }
  return [];
}
