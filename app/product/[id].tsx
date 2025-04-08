import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Product Details{id}</Text>
    </View>
  );
}
