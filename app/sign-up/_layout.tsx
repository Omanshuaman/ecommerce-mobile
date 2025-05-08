import { router, Slot, Stack, usePathname } from "expo-router";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const pathname = usePathname();
  const step = pathname.includes("name")
    ? "2/4"
    : pathname.includes("otp")
    ? "1/4"
    : pathname.includes("social")
    ? "4/4"
    : pathname.includes("thankyou")
    ? "4/4"
    : pathname.includes("email")
    ? "3/4"
    : pathname.includes("otp-phone")
    ? "1/4"
    : "";

  return (
    <Stack
      screenOptions={{
        headerTransparent: true, // Allow content to flow under the header
        headerRight: () => (
          <View className="flex-row items-center">
            <Text
              className="text-white"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 20 }}>
              {step}
            </Text>
          </View>
        ),
        headerTitle: () => (
          <Text className="text-white text-lg font-semibold"></Text>
        ),
        headerLeft: () => (
          <TouchableOpacity className="pl-4" onPressIn={() => router.back()}>
            <Ionicons name="chevron-back" size={16} color="white" />
          </TouchableOpacity>
        ),
        headerShadowVisible: false,
      }}
    />
  );
}
