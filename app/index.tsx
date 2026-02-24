import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView >
      <View className="mt-5 mx-2.5">
        <Text className="text-4xl font-work-black text-primary" >Hola mundo</Text>
        <Text className="text-3xl font-work-black text-secondary" >Hola mundo</Text>
        <Text className="text-2xl font-work-medium text-secondary-100">Hola mundo</Text>
        <Text className="text-xl font-work-light text-tertiary">Hola mundo</Text>
      </View>
    </SafeAreaView>
  );
}
