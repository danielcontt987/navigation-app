import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="user/index"
        options={{ title: 'User' }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{ title: 'Schedule' }}
      />
    </Drawer>
  );
}