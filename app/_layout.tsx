import { Slot, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "PPFormulaCondensed-Light": require("../assets/fonts/PPFormulaCondensed-Light.ttf"),
    "PPFormulaCondensed-Regular": require("../assets/fonts/PPFormulaCondensed-Regular.ttf"),
    "PPFormulaCondensed-Bold": require("../assets/fonts/PPFormulaCondensed-Bold.ttf"),
    "PPFormulaCondensed-Black": require("../assets/fonts/PPFormulaCondensed-Black.ttf"),
    "Helvetica-Neue": require("../assets/fonts/HelveticaNeue.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      {/* <Slot /> */}
      <Stack>
        <Stack.Screen
          name="product/[id]"
          options={{ title: "Product Details" }}
        />
        <Stack.Screen name="index" options={{ title: "Creator Store" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
