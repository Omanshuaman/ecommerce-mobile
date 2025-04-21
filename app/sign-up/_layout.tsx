import { Stack } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true, // Allow content to flow under the header
        headerRight: () => (
          <View className="flex-row items-center">
            <Text
              className="text-white"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 20 }}>
              1/3
            </Text>
          </View>
        ),
        headerTitle: () => (
          <Text className="text-white text-lg font-semibold"></Text>
        ),
        headerLeft: () => (
          <TouchableOpacity className="pl-4">
            <Ionicons name="chevron-back" size={16} color="white" />
          </TouchableOpacity>
        ),
        headerShadowVisible: false,
      }}
    />
  );
}
