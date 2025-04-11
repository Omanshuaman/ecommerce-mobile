import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const AddProduct = () => {
  const [image, setImage] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const router = useRouter();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  const addAnotherPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setAdditionalImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#161616]">
      <View className="bg-black py-4 px-4 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={16} color="white" />
        </TouchableOpacity>

        <Text
          className="text-white font-[HelveticaNeue-Medium] text-center text-xl"
          style={{ color: "white", fontFamily: "HelveticaNeue-Bold" }}>
          Add Product
        </Text>

        {/* Invisible View to center the title properly */}
        <View />
      </View>
      <ScrollView className="px-4 py-2">
        {/* Upload Photo & Reel */}
        <View className="flex-row justify-between space-x-2 mb-4">
          {image ? (
            <TouchableOpacity className="flex-1 aspect-square border border-white relative rounded-md">
              <Image
                source={{ uri: image }}
                resizeMode="contain"
                className="w-full aspect-square self-center rounded-md bg-black"
              />
              <Text
                onPress={() => {
                  setImage(null);
                }}
                className="bg-red-600 w-fit absolute top-3 right-4 rounded-md p-1 px-3 text-white font-bold text-xl">
                X
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={pickImage}
              className="flex-1 aspect-square border border-white items-center justify-center rounded-md">
              <Ionicons name="image-outline" size={24} color="white" />
              <Text className="text-white mt-2">Upload Photo</Text>
            </TouchableOpacity>
          )}
          {video ? (
            <TouchableOpacity className="flex-1 aspect-square border border-white relative rounded-md">
              <Image
                source={{ uri: video }}
                resizeMode="contain"
                className="w-full aspect-square self-center rounded-md bg-black"
              />
              <Text
                onPress={() => {
                  setVideo(null);
                }}
                className="bg-red-600 w-fit absolute top-3 right-4 rounded-md p-1 px-3 text-white font-bold text-xl">
                X
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={pickVideo}
              className="flex-1 aspect-square border border-white items-center justify-center rounded-md">
              <Ionicons name="videocam-outline" size={24} color="white" />
              <Text className="text-white mt-2">Upload Reel</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Display additional photos */}
        {additionalImages.map((uri, index) => (
          <View
            key={index}
            className="flex-row justify-between space-x-2 mb-4 h-50">
            <TouchableOpacity className="flex-1 aspect-square border border-white relative rounded-md h-50">
              <Image
                source={{ uri }}
                resizeMode="contain"
                className="w-full h-50 aspect-square self-center rounded-md bg-black"
              />
              <Text
                onPress={() => {
                  setAdditionalImages((prev) =>
                    prev.filter((image) => {
                      return image !== uri;
                    })
                  );
                }}
                className="bg-red-600 w-fit absolute top-3 right-4 rounded-md p-1 px-3 text-white font-bold text-xl">
                X
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Add Another Photo */}
        <TouchableOpacity
          onPress={addAnotherPhoto}
          className="border border-dashed border-white py-3 rounded-md mb-4 items-center">
          <Text className="text-white">Add another photo</Text>
        </TouchableOpacity>

        {/* Dropdowns and Inputs */}
        {[
          "Brand",
          "Category",
          "Product Condition",
          "Occasion",
          "Primary material",
          "Primary color",
        ].map((label) => (
          <TouchableOpacity
            key={label}
            className="flex-row justify-between items-center border-b border-white py-3">
            <Text className="text-white">{label}</Text>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>
        ))}

        {/* Price Inputs */}
        <View className="flex-row justify-between items-center py-3">
          <View className="flex-1 mr-2">
            <Text className="text-white mb-1">Original Price</Text>
            <TextInput
              keyboardType="numeric"
              className="bg-gray-800 text-white px-3 py-2 rounded"
              placeholder="₹ 0000"
              placeholderTextColor="#999"
            />
          </View>
          <View className="flex-1">
            <Text className="text-white mb-1">Discounted Price</Text>
            <TextInput
              keyboardType="numeric"
              className="bg-gray-800 text-white px-3 py-2 rounded"
              placeholder="₹ 0000"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Number of Pieces */}
        <View className="py-3">
          <Text className="text-white mb-1">Number of pieces</Text>
          <TextInput
            keyboardType="numeric"
            className="bg-gray-800 text-white px-3 py-2 rounded"
            placeholder="01"
            placeholderTextColor="#999"
          />
        </View>

        {/* Additional Details */}
        <View className="border-t border-white py-3">
          <Text className="text-white mb-1">Add Additional Details</Text>
          <TextInput
            multiline
            className="bg-gray-800 text-white px-3 py-3 rounded h-24"
            placeholder="DESCRIBE THE DESIGN"
            placeholderTextColor="#999"
          />
        </View>
      </ScrollView>

      {/* Publish Button */}
      <TouchableOpacity className="bg-yellow-400 py-4 items-center">
        <Text className="text-black font-bold text-lg">PUBLISH</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddProduct;
