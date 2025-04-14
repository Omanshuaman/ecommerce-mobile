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
import BrandModal from "./components/BrandModal";
import CategoryModal from "./components/CategoryModal";

const AddProduct = () => {
  const [image, setImage] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const router = useRouter();
  const [selectedBrand, setSelectedBrand] = useState<string | null>("");
  const [brandmodal, setBrandModal] = useState(false);
  const [originalPrice, setOriginalPrice] = useState<string | null>("");
  const [discountedPrice, setDiscountedPrice] = useState<string | null>("");
  const [pieces, setPieces] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [categorymodal, setCategoryModal] = useState(false);
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
      <ScrollView className="px-4 py-2" nestedScrollEnabled={true}>
        {/* Upload Photo & Reel */}
        <View className="flex-row justify-between gap-1 mb-4">
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

        <TouchableOpacity
          className="flex-row justify-between items-center py-3"
          onPress={() => setBrandModal(true)}>
          <Text className="text-white">Brand</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-typography-500 text-sm">{selectedBrand}</Text>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <BrandModal
          brandModal={brandmodal}
          selectedBrand={selectedBrand}
          setBrandModal={setBrandModal}
          setSelectedBrand={setSelectedBrand}
        />
        <TouchableOpacity
          className="flex-row justify-between items-center py-2"
          onPress={() => setCategoryModal(true)}>
          <Text className="text-white">Category</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-typography-500 text-sm">
              {selectedCategory.length}
            </Text>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <CategoryModal
          categoryModal={categorymodal}
          selectedCategory={selectedCategory}
          setCategoryModal={setCategoryModal}
          setSelectedCategory={setSelectedCategory}
        />
        <View className="flex-row justify-between items-center py-1">
          <Text className="text-white">Original Price</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-white">₹</Text>
            <TextInput
              keyboardType="numeric"
              className="bg-gray-800 text-white w-16 text-center rounded-sm border border-white"
              placeholder="0000"
              placeholderTextColor="#999"
              style={{
                fontFamily: "PPFormulaCondensed-Regular",
                fontSize: 15,
              }}
              value={originalPrice ?? ""}
              onChangeText={(text) => {
                setOriginalPrice(text);
              }}
            />
          </View>
        </View>
        <View className="flex-row justify-between items-center py-1">
          <Text className="text-white">Discounted Price</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-white">₹</Text>
            <TextInput
              keyboardType="numeric"
              className="bg-gray-800 text-white w-16 text-center rounded-sm border border-white"
              placeholder="0000"
              placeholderTextColor="#999"
              style={{
                fontFamily: "PPFormulaCondensed-Regular",
                fontSize: 15,
              }}
              value={discountedPrice ?? ""}
              onChangeText={(text) => {
                setDiscountedPrice(text);
              }}
            />
          </View>
        </View>
        <View className="flex-row justify-between items-center py-1">
          <Text className="text-white">No. of Pieces</Text>
          <View className="flex-row items-center gap-2">
            <TextInput
              keyboardType="numeric"
              className="bg-gray-800 text-white w-16 text-center rounded-sm border border-white"
              placeholder="01"
              maxLength={2}
              placeholderTextColor="#999"
              style={{
                fontFamily: "PPFormulaCondensed-Regular",
                fontSize: 15,
              }}
              value={pieces ?? ""}
              onChangeText={(text) => {
                setPieces(text);
              }}
            />
          </View>
        </View>

        <View className="py-1">
          <Text className="text-white mb-1">Design Description</Text>
          <TextInput
            multiline
            className="bg-gray-800 text-white px-3 py-3 rounded h-fit border border-white"
            placeholder="DESCRIBE THE DESIGN"
            placeholderTextColor="#999"
            placeholderClassName=""
            style={{
              fontFamily: "PPFormulaCondensed-Regular",
              fontSize: 18,
            }}
            value={description ?? ""}
            onChangeText={(text) => {
              setDescription(text);
            }}
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
