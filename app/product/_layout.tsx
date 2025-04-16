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
          headerShown: true,
          title: "", // Empty title
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.back()}
              style={{ paddingLeft: 6 }}>
              <Ionicons name="chevron-back" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                paddingRight: 12,
              }}>
              <TouchableOpacity>
                <Feather name="message-square" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="share" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
