import { router, Stack, useRouter, Slot } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";

export default function RootLayout() {
  const router = useRouter();

  return <Slot></Slot>;
}
