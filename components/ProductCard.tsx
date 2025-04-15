import { Image } from "react-native";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { Link } from "expo-router";

const ProductCard = ({ product }: any) => (
  <Link href={`/product/${product.id}`} asChild>
    <Pressable className="flex-1">
      <View className="bg-[#1c1c1e] rounded-sm">
        <Image
          source={{ uri: product.image }}
          className="mb-6 h-[200px] w-full rounded-md"
          resizeMode="contain"
        />
        <View className="flex-row justify-between items-center px-2 pt-1.5">
          <View className="flex-row items-center">
            <FontAwesome name="eye" color="#fff" size={14} />
            <Text className="text-white ml-1 text-xs">{product.views}</Text>
          </View>
          <View className="flex-row items-center">
            <FontAwesome name="heart" color="#fff" size={14} />
            <Text className="text-white ml-1 text-xs">{product.likes}</Text>
          </View>
        </View>
        <View className="px-2 pb-3">
          <Text className="text-white font-bold mt-1 text-sm">
            {product.description}
          </Text>
          <Text className="text-[#cccccc] text-sm">
            ₹{product.originalPrice}
          </Text>
          <Text className="text-[#888888] text-xs">
            {product.selectedBrand}
          </Text>
        </View>
      </View>
    </Pressable>
  </Link>
);
export default ProductCard;
