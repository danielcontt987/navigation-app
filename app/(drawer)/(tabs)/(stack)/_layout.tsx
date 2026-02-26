import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
     <Stack
      screenOptions={{
        headerShadowVisible: false,
        // headerShown: false,
        headerTitleAlign: 'center',
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
     >
      <Stack.Screen 
        name='home/index'
        options={{
          title: 'Home'
        }}
      />
      <Stack.Screen 
        name='settings/index'
        options={{
          title: 'Settings'
        }}
      />
      <Stack.Screen 
        name='profile/index'
        options={{
          title: 'Profile'
        }}
      />
      <Stack.Screen 
        name='products/index'
        options={{
          title: 'Products',
        }}
      />
     </Stack>
  )
}

export default StackLayout