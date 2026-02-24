import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="mt-5 mx-2.5">
        <Text className="text-2xl font-work-black" >Hola mundo</Text>
        <Text className="text-xl font-work-medium">Hola mundo</Text>
        <Text className="text-xl font-work-light">Hola mundo</Text>
      </View>
    </SafeAreaView>
  );
}
