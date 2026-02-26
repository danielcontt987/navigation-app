import CustomDrawer from '@/components/shared/CustomDrawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: 'white' },
      }
    }
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Tabs + Stack', 
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          )
        }}

      />
      <Drawer.Screen
        name="user/index"
        options={{ title: 'User', 
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          )
        }}

      />
      <Drawer.Screen
        name="schedule/index"
        options={{ title: 'Schedule' ,
           drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          )
        }}
      />
    </Drawer>
  );
}