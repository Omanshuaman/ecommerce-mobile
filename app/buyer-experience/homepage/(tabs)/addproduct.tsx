import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";

const AddProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <SafeAreaView className="flex-1">
        <StatusBar backgroundColor={"#3b2c2d"} barStyle="light-content" />

        <ImageBackground
          source={require("../../../../assets/bg-image.jpg")}
          style={{ flex: 1 }}
          resizeMode="cover">
          <View className="bg-black border border-white rounded-sm mx-auto my-6 p-2 flex-row items-center justify-center w-5/6">
            <Ionicons name="search" size={17} color="white" className="mr-2" />
            <Text
              className=" text-white"
              style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 14 }}>
              Search by brand, color, etc
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default AddProduct;
