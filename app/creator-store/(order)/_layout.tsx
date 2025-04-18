import { router, Stack, useRouter, Slot } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="order-info"
        options={{
          title: "Order Information",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity onPressIn={() => router.back()}>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
