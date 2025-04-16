import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  Image as RNImage,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { useCart } from "@/store/cartStore";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const addProduct = useCart((state: any) => state.addProduct);
  const [filteredProduct, setFilteredProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const value = await AsyncStorage.getItem("myData");
        if (value !== null) {
          const products = JSON.parse(value);
          const product = products.find((p: any) => p.originalPrice);
          console.log(product);
          setFilteredProduct(product);
        }
      } catch (e) {
        console.log("Error loading product:", e);
      }
    };

    fetchProduct();
  }, [id]);

  if (!filteredProduct) {
    return (
      <Box className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
      </Box>
    );
  }

  return (
    <ScrollView className="flex-1 bg-black px-4 py-6">
      <View className="relative">
        <RNImage
          source={{ uri: filteredProduct.image }}
          className="w-full mb-4 h-full"
          resizeMode="cover"
        />

        {/* Absolute Tags */}
        <View className="absolute bottom-1 left-1 flex-row items-center space-x-1 px-2 py-1 rounded-md gap-1">
          <Text className="text-xs bg-yellow-400 text-black font-bold px-2 py-0.5 rounded">
            OBSESSED
          </Text>
          <Text className="text-xs bg-white text-black font-semibold px-2 py-0.5 rounded">
            Like new
          </Text>
        </View>
      </View>

      {/* Title */}
      <Heading size="xl" className="text-white uppercase font-extrabold mb-1">
        {filteredProduct.selectedBrand}
      </Heading>

      {/* Price Row */}
      <Box className="flex-row items-center space-x-3">
        <Text className="text-xl text-white font-bold">
          ₹{filteredProduct.discountedPrice}
        </Text>
        <Text className="text-base text-gray-400 line-through">
          ₹{filteredProduct.originalPrice}
        </Text>
      </Box>

      {/* Description */}
      <Text className="text-white text-sm mt-2">
        {filteredProduct.description}
      </Text>

      {/* Seller Info */}
      <Box className="flex-row justify-between items-center mt-3 mb-4">
        <Text className="text-white font-medium text-sm">
          👤 Samuil Sadovsky
        </Text>
        <Text className="text-white font-medium text-sm">
          {filteredProduct.pieces} Pieces left
        </Text>
      </Box>

      {/* Accordion Sections */}
      <Box className="border-t border-gray-700 mt-2 pt-2">
        <TouchableOpacity>
          <Text className="text-white font-semibold text-base mb-2">
            Available Colors ▢
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-base border-t border-gray-700 py-3">
            Size: Medium
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-base border-t border-gray-700 py-3">
            Details +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-base border-t border-b border-gray-700 py-3">
            Offers +
          </Text>
        </TouchableOpacity>
      </Box>

      {/* Action Buttons */}
      <Box className="flex-row space-x-4 mt-8">
        <Button
          className="flex-1 border border-white bg-transparent"
          variant="outline">
          <ButtonText className="text-white font-semibold">
            UNPUBLISH
          </ButtonText>
        </Button>
        <Button className="flex-1 bg-yellow-400">
          <ButtonText className="text-black font-bold">EDIT PRODUCT</ButtonText>
        </Button>
      </Box>
    </ScrollView>
  );
}
