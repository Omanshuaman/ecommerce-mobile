import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ResizeMode, Video } from "expo-av";
import { useProduct } from "@/store/productStore";
import { SafeAreaView } from "react-native-safe-area-context";

const mockProducts = [
  {
    id: "1",
    name: "Smart Watch",
    price: "₹2,000",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    condition: "Like New",
    quantity: 16,
  },
  {
    id: "2",
    name: "No 5 Chanel",
    price: "₹2,000",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    condition: "Like New",
    quantity: 16,
  },
  {
    id: "3",
    name: "FocusMax 200",
    price: "₹2,000",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    condition: "Like New",
    quantity: 16,
  },
];

const TagProductsScreen = () => {
  const [taggedProducts, setTaggedProducts] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const reel = useProduct((state: any) => state.reels);

  const [reelData, setReelData] = useState<any>({
    id: "",
    reel: null,
    cover: null,
    taggedProducts: [],
  });
  useEffect(() => {
    if (!reel || reel.length === 0 || !reel[0].reel) return;
    setReelData((prev: any) => {
      if (prev.id === reel[0].reel.id) return prev;

      return {
        ...prev,
        reel: reel[0].reel.videoUrl,
        cover: reel[0].reel.previewImage,
        taggedProducts: reel[0].reel.taggedProducts,
      };
    });
  }, [reel]);
  const toggleTagProduct = (productId: string) => {
    setTaggedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  useEffect(() => {
    console.log(reelData);
  }, [reelData]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView className="bg-[#161616] flex-1">
      <ScrollView contentContainerStyle={{ paddingTop: 60 }} className="mx-4">
        {/* Upload Reel and Cover */}
        <View className="flex-row justify-between mb-5 gap-3 ">
          {reelData.reel ? (
            <TouchableOpacity className="flex-1 border border-white relative rounded-sm h-80">
              <Video
                source={{ uri: reelData.reel }}
                className="rounded-sm bg-black self-center"
                style={{ width: 140, height: 205 }}
                useNativeControls
                resizeMode={ResizeMode.COVER}
              />

              <TouchableOpacity
                onPress={() => {
                  setVideo(null);
                }}
                className="absolute text-white bg-black p-3 rounded-sm"
                style={{
                  bottom: "5%",
                  left: "50%",
                  transform: [{ translateX: -16 }],
                }}>
                <AntDesign name="delete" size={14} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={pickVideo}
              className="flex-1 border border-white items-center justify-center rounded-sm h-80 gap-1">
              <Feather name="video" size={24} color="white" />
              <Text
                className="text-white mt-2 text-center"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Upload{"\n"} Reel
              </Text>
            </TouchableOpacity>
          )}

          {reelData.cover ? (
            <TouchableOpacity className="flex-1 border border-white relative rounded-sm h-80">
              <Image
                source={{ uri: reelData.cover }}
                resizeMode="cover"
                className="w-full h-full self-center rounded-sm bg-black"
              />

              <TouchableOpacity
                onPress={() => {
                  setImage(null);
                }}
                className="absolute text-white bg-black p-3 rounded-sm"
                style={{
                  bottom: "5%",
                  left: "50%",
                  transform: [{ translateX: -16 }],
                }}>
                <AntDesign name="delete" size={14} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={pickImage}
              className="flex-1 border border-white items-center justify-center rounded-sm h-80 gap-1">
              <Ionicons name="image-outline" size={24} color="white" />
              <Text
                className="text-white mt-2 text-center"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Add {"\n"}Cover Photo
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Tag Products Header */}
        <View className="flex-row justify-between mb-3">
          <Text
            className="text-white text-base"
            style={{ fontFamily: "HelveticaNeue-Light" }}>
            Tag products to the video
          </Text>
          <View className="flex-row items-center gap-3">
            <AntDesign name="search1" size={20} color="white" />
            <Ionicons name="filter" size={20} color="white" />
            <TouchableOpacity className="border border-white px-2 py-1 rounded-sm">
              <Text
                className="text-white"
                style={{ fontFamily: "HelveticaNeue-Light" }}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Product List */}
        {mockProducts.map((product) => (
          <View
            className="flex-row items-center px-4 py-4 border border-white mb-2.5"
            key={product.id}>
            <Image
              source={{ uri: product.image }}
              className="size-16 rounded-sm mr-3"
            />
            <View className="flex-row flex-1 justify-between">
              <View className="gap-1">
                <Text
                  className="text-white text-lg"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  {product.name}
                </Text>
                <Text
                  className="text-white text-base"
                  style={{ fontFamily: "HelveticaNeue-Light" }}>
                  {product.condition}
                </Text>
              </View>
              <View className=" gap-1 mr-6">
                <Text
                  className="text-white text-lg"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  {product.price}
                </Text>
                <Text
                  className="text-white text-base text-right"
                  style={{ fontFamily: "HelveticaNeue-Light" }}>
                  {product.quantity}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => toggleTagProduct(product.id)}
              className="border border-white rounded-sm h-[52px] w-12 items-center justify-center"
              style={{
                shadowColor: "white",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                backgroundColor: "black",
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                paddingVertical: 8,
                paddingHorizontal: 4,
              }}>
              <Ionicons
                name={taggedProducts.includes(product.id) ? "checkmark" : "add"}
                size={22}
                color={taggedProducts.includes(product.id) ? "white" : "yellow"}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Publish Button */}
      <TouchableOpacity
        className="bg-[#E5FF03] py-2 items-center justify-center mx-3 rounded-sm mb-3 shadow-lg shadow-white"
        onPress={() => {
          console.log("Publishing with products:", taggedProducts);
        }}
        disabled={taggedProducts.length === 0}
        style={{
          opacity: taggedProducts.length === 0 ? 0.3 : 1,
        }}>
        <Text
          className="text-black"
          style={{
            fontFamily: "PPFormulaCondensed-Bold",
            fontSize: 36,
          }}>
          PUBLISH
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TagProductsScreen;
