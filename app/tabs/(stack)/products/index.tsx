import { products } from '@/db/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList 
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => 
          <View className='mt-10'>
            <Text className='text-2xl font-bold font-work-black'>{item.title}</Text>
            <Text className=''>{item.description}</Text>
            <View className='flex flex-row justify-between mt-2'>
              <Text className='text-xl font-work-bold text-green-500'>${item.price}</Text>
              <Link href={`/tabs/(stack)/products/${item.id}`} className='text-primary'>View Details</Link>
            </View>
          </View>
        }
      />
    </View>
  )
}

export default ProductsScreen