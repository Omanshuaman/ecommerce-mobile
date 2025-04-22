import { router, Stack, usePathname } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const pathname = usePathname();
  const step = pathname.includes("name")
    ? "2/3"
    : pathname.includes("otp")
    ? "1/3"
    : pathname.includes("social")
    ? "3/3"
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
