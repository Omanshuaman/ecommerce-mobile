import { router, Stack, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
