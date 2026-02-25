import CustomBottons from '@/components/shared/CustomBottons'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>

        <CustomBottons
          className='my-2 mb-5'
          color='primary'
          onPress={() => router.push('/tabs/(stack)/products')}
        >
          Productos
        </CustomBottons>
        <CustomBottons
          className='mb-5'
          color='secondary'
          onPress={() => router.push('/tabs/profile')}
        >
          Profile
        </CustomBottons>
        <CustomBottons
          className='mb-5'
          color='tertiary'
          onPress={() => router.push('/tabs/settings')}
        >
          Settings
        </CustomBottons>

        {/* <Link className='mb-15' href='/products' asChild >
          <CustomBottons
            color='tertiary'
          >
            Products
          </CustomBottons>
        </Link> */}
        <CustomBottons
          variant='text-only'
          onPress={() => router.push('/tabs/products')}
        >
          Products
        </CustomBottons>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen