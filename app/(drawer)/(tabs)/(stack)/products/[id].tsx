import { products } from '@/db/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';


const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <Redirect href='/' />
  }

  return (
    <View className='px-5 mt-10'>
      <Text className='font-work-black text-2xl'>{product.title}</Text>
      <Text className='font-work-light'>{product.description}</Text>
      <Text className='font-work-black text-green-600'>{product.price}</Text>
    </View>
  )
}

export default ProductScreen