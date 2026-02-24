import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>
        <Link className='mb-5 mt-5' href='/products' >
          Productos
        </Link>
        <Link className='mb-5' href='/profile' >
          Profile
        </Link>
        <Link className='mb-5' href='/settings' >
          Settings
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen