import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Text, View } from 'react-native'
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}
      scrollEnabled={false}>
      <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-indigo-500'>
        <View className='flex justify-center items-center bg-white rounded-full w-24 h-24 mb-3'>
          <Text className='text-2xl font-bold text-indigo-500'>JD</Text>
        </View>
      </View>
      {/* DrawerItems */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer