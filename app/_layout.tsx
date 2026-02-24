import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
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
  }, [fontsLoaded,error]);

  if (!fontsLoaded && !error) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
