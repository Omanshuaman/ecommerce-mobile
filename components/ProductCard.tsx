import { Image, View, Text, Pressable } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

const ProductCard = ({ product }: any) => (
  <Link href={`/product/${product.originalPrice}`} asChild>
    <Pressable className="flex-1 px-1.5">
      <View className="overflow-hidden ">
        {/* Product Image */}
        <View className="relative">
          <Image
            source={{ uri: product.image }}
            className="w-full h-48 "
            resizeMode="cover"
          />

          {/* Absolute Positioned Icons */}
          <View className="absolute bottom-1 left-1 flex-row items-center space-x-1 px-2 py-1 rounded-md gap-1">
            <View className="bg-white flex-row border border-black p-1 gap-1 justify-center items-center rounded-sm  ">
              <FontAwesome name="eye" color="black" size={14} />
              <Text className="text-black text-sm">3</Text>
            </View>
            <View className="bg-white flex-row border border-black p-1 gap-1 justify-between items-center rounded-sm">
              <AntDesign name="hearto" size={14} color="black" />
              <Text className="text-black text-sm">7</Text>
            </View>
          </View>
        </View>

        {/* Product Info */}
        <View className="px-3 pt-2 pb-3">
          <Text
            className="text-white w-full"
            numberOfLines={1}
            style={{ fontFamily: "HelveticaNeue-Bold", fontSize: 15 }}>
            {product.description}
          </Text>
          <Text
            className="text-white mt-1"
            style={{ fontFamily: "HelveticaNeue-Light", fontSize: 13 }}>
            ₹{product.originalPrice}
          </Text>
          <Text className="text-neutral-400 text-xs mt-1">
            {product.selectedBrand}
          </Text>
        </View>
      </View>
    </Pressable>
  </Link>
);

export default ProductCard;
