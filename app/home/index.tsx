import CustomBottons from '@/components/shared/CustomBottons'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>
        {/* <Link className='mb-5 mt-5' href='/products' >
          Productos
        </Link>
        <Link className='mb-5' href='/profile' >
          Profile
        </Link>
        <Link className='mb-5' href='/settings' >
          Settings
        </Link> */}

        <CustomBottons
          className='mb-2'
          color='primary'
          onPress={() => router.push('/products')}
        >
          Productos
        </CustomBottons>
        <CustomBottons
          color='secondary'
          onPress={() => router.push('/profile')}
        >
          Profile
        </CustomBottons>
        <CustomBottons
          color='tertiary'
          onPress={() => router.push('/settings')}
        >
          Settings
        </CustomBottons>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen