import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';

const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftClick = (navigation: any) => {
    if (router.canGoBack()) {
      return router.back();
    } 

    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        // headerShown: false,
        headerTitleAlign: 'center',
        contentStyle: {
          backgroundColor: '#fff',
        },
        headerLeft: ({ tintColor, canGoBack }) => <Ionicons
          name={canGoBack ? "arrow-back-outline" : "menu-outline"} size={24} className='mr-5'
          onPress={() => onHeaderLeftClick(navigation)}
        />
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