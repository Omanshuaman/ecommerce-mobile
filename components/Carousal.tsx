import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { listProducts } from "@/api/products";
import { useBreakpointValue } from "./ui/utils/use-break-point-value";

const { width } = Dimensions.get("window");

const Carousal = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Error fetching products</Text>;
  }
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <Cards item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="normal"
      snapToInterval={width - 30}
      contentContainerStyle={{ marginBottom: 50, marginLeft: 10 }}
    />
  );
};

const Cards = ({ item }: any) => {
  return (
    <View className="gap-2 bg-transparent" style={{ width: width - 30 }}>
      <View className=" flex-row items-center space-x-1 gap-1 bg-transparent ">
        <Text
          className="bg-[#E5FF03] text-black px-2 pt-0.5 border border-gray-800 shadow-lg shadow-gray-950"
          style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 17 }}>
          OBSESSED
        </Text>
        <Text
          className=" bg-white text-black font-normal px-2 py-1 border border-gray-800"
          style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 14 }}>
          Like new
        </Text>
      </View>

      <View className="bg-white p-2 mr-4">
        <View className="flex-row items-center gap-1">
          <Image
            source={{ uri: item.images[0] }}
            className="w-16 h-full rounded-sm mr-3"
            resizeMode="contain"
          />
          <View className="flex-1">
            <Text
              className=" text-black"
              numberOfLines={1}
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 24 }}>
              {item.title}
            </Text>
            <View className="flex-row gap-2">
              <Text style={{ fontFamily: "HelveticaNeue-Medium" }}>
                ₹{item.price}
              </Text>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontFamily: "HelveticaNeue-Medium",
                }}
                className="text-gray-400">
                ₹{Math.round(item.price / (1 - item.discountPercentage / 100))}
              </Text>
            </View>

            <Text
              className=" text-black mt-1"
              style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 13 }}>
              {item.brand}
            </Text>
          </View>
          <TouchableOpacity
            className="border border-black bg-[#E5FF03] rounded-sm h-16 w-12 items-center justify-center"
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}>
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Carousal;
