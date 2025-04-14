import { Link, router, Slot, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pressable, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "@/components/ui/text";
import { useCart } from "@/store/cartStore";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "PPFormulaCondensed-Light": require("../assets/fonts/PPFormulaCondensed-Light.ttf"),
    "PPFormulaCondensed-Regular": require("../assets/fonts/PPFormulaCondensed-Regular.ttf"),
    "PPFormulaCondensed-Bold": require("../assets/fonts/PPFormulaCondensed-Bold.ttf"),
    "PPFormulaCondensed-Black": require("../assets/fonts/PPFormulaCondensed-Black.ttf"),
    "Helvetica-Neue": require("../assets/fonts/HelveticaNeue.ttf"),
    "HelveticaNeue-Bold": require("../assets/fonts/HelveticaNeuBold.ttf"),
    "HelveticaNeue-BlackCond": require("../assets/fonts/HelveticaNeue BlackCond.ttf"),
    "HelveticaNeue-Light": require("../assets/fonts/HelveticaNeue Light.ttf"),
    "HelveticaNeue-Medium": require("../assets/fonts/HelveticaNeue Medium.ttf"),
    "HelveticaNeue-Thin": require("../assets/fonts/HelveticaNeue Thin.ttf"),
  });
  const cartItemsNum = useCart((state: any) => state.items.length);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        {/* <Slot /> */}
        <Stack
          screenOptions={{
            headerRight: () =>
              cartItemsNum > 0 && (
                <TouchableOpacity
                  className="flex-row gap-2"
                  onPressIn={() => {
                    router.push("/cart");
                  }}>
                  <AntDesign name="shoppingcart" size={24} color="black" />
                  <Text>{cartItemsNum}</Text>
                </TouchableOpacity>
              ),
          }}>
          <Stack.Screen
            name="product/[id]"
            options={{ title: "Product Details" }}
          />
          <Stack.Screen name="index" options={{ title: "Creator Store" }} />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
