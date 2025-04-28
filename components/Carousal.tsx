import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const slides = [
  {
    id: "1",
    title: "OFF-SHOULDER SWEATER",
    description: "₹3,999 ₹4,500",
    brand: "Zara",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    title: "CASUAL JACKET",
    description: "₹5,499 ₹6,000",
    brand: "H&M",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    title: "SUMMER DRESS",
    description: "₹2,299 ₹2,800",
    brand: "Forever 21",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const { width } = Dimensions.get("window");

const Carousal = () => {
  return (
    <FlatList
      data={slides}
      renderItem={({ item }) => <Cards item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - 32} // Adjust the width to account for padding
      snapToAlignment="center"
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: 16, marginBottom: 40 }}
    />
  );
};

const Cards = ({ item }: any) => {
  return (
    <View className="gap-2 mr-2 bg-transparent">
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

      <View className="bg-white p-2 mr-4 w-[85vw]">
        <View className="flex-row items-center gap-1">
          <Image
            source={{ uri: item.image }}
            className="w-16 h-full rounded-sm mr-3"
            resizeMode="cover"
          />
          <View className="flex-1">
            <Text
              className=" text-black"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 24 }}>
              {item.title}
            </Text>
            <Text
              className=" text-gray-500 mt-1"
              style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 15 }}>
              {item.description}
            </Text>
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
