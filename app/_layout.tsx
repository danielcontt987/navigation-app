import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "WorkSan-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSan-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSan-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  //Ocultar el stacjk para evitar que se muestre antes de que las fuentes estén cargadas
  // return <Stack screenOptions={{ headerShown: false }} />;
  return <Slot />
  // return <Stack />;
}
