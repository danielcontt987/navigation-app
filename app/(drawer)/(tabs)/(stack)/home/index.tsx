import CustomBottons from '@/components/shared/CustomBottons'
import { DrawerActions } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <SafeAreaView>
      <View className='px-10'>

        <CustomBottons
          className='my-2 mb-5'
          color='primary'
          onPress={() => router.push('/products')}
        >
          Productos
        </CustomBottons>
        <CustomBottons
          className='mb-5'
          color='secondary'
          onPress={() => router.push('/profile')}
        >
          Profile
        </CustomBottons>
        <CustomBottons
          className='mb-5'
          color='tertiary'
          onPress={() => router.push('/settings')}
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
          onPress={() => router.push('/products')}
        >
          Products
        </CustomBottons>
        <CustomBottons
          onPress={onToggleDrawer}
        >
          Abrir menú
        </CustomBottons>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen