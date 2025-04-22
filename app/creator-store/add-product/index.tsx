import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ImageBackground,
} from "react-native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";
import BrandModal from "./components/BrandModal";
import CategoryModal from "./components/CategoryModal";
import ProductConditionModal from "./components/ProductConditionModal";
import PrimaryMaterialModal from "./components/PrimaryMaterialModal";
import PrimaryColorModal from "./components/PrimaryColorModal";
import OccasionModal from "./components/OccasionModal";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  AddIcon,
  ExternalLinkIcon,
  RemoveIcon,
} from "@/components/ui/icon";
import { Divider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [productConditionmodal, setProductConditionModal] = useState(false);
  const [selectedProductCondition, setSelectedProductCondition] = useState<
    string | null
  >("");
  const [productName, setProductName] = useState<string | null>("");
  const [conditionDescription, setConditionDescription] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [categorymodal, setCategoryModal] = useState(false);

  const [primaryMaterialModal, setPrimaryMaterialModal] = useState(false);
  const [selectedPrimaryMaterial, setSelectedPrimaryMaterial] = useState<
    string | null
  >("");

  const [primaryColorModal, setPrimaryColorModal] = useState(false);
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState<
    string | null
  >("");

  const [occasionModal, setOccasionModal] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>("");

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

  const validateForm = () => {
    if (!image) {
      Alert.alert("Validation Error", "Please upload a photo.");
      return false;
    }
    if (!productName) {
      Alert.alert("Validation Error", "Please enter a product name.");
      return false;
    }
    if (!video) {
      Alert.alert("Validation Error", "Please upload a reel.");
      return false;
    }
    if (!selectedBrand) {
      Alert.alert("Validation Error", "Please select a brand.");
      return false;
    }
    if (selectedCategory.length === 0) {
      Alert.alert("Validation Error", "Please select at least one category.");
      return false;
    }
    if (!originalPrice || isNaN(Number(originalPrice))) {
      Alert.alert("Validation Error", "Please enter a valid original price.");
      return false;
    }
    if (!discountedPrice || isNaN(Number(discountedPrice))) {
      Alert.alert("Validation Error", "Please enter a valid discounted price.");
      return false;
    }
    if (!pieces || isNaN(Number(pieces))) {
      Alert.alert("Validation Error", "Please enter a valid number of pieces.");
      return false;
    }
    if (!description) {
      Alert.alert("Validation Error", "Please provide a design description.");
      return false;
    }
    if (!selectedProductCondition) {
      Alert.alert("Validation Error", "Please select a product condition.");
      return false;
    }
    return true;
  };

  const saveProductToFile = async (product: object) => {
    try {
      const existingData = await AsyncStorage.getItem("myData");
      const parsedData = existingData ? JSON.parse(existingData) : [];

      const updatedData = [...parsedData, product];

      await AsyncStorage.setItem("myData", JSON.stringify(updatedData));
      Alert.alert("Success", `${JSON.stringify(product)}`);
    } catch (error) {
      Alert.alert("Error", "Failed to save product.");
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/bg-image.jpg")}
      style={{ flex: 1, paddingTop: 50 }} // Add padding to avoid overlap with the header
      resizeMode="cover">
      <SafeAreaView className="flex-1">
        <ScrollView className=" py-2 " nestedScrollEnabled={true}>
          {/* Upload Photo & Reel */}
          <View className="flex-row justify-between gap-2 mb-4 px-2 mr-2">
            {image ? (
              <TouchableOpacity className="w-3/5 border border-white relative rounded-sm h-64">
                <Image
                  source={{ uri: image }}
                  resizeMode="contain"
                  className="w-full  self-center rounded-sm bg-black"
                />
                <Text
                  onPress={() => {
                    setImage(null);
                  }}
                  className="bg-red-600 w-fit absolute top-3 right-4 rounded-sm p-1 px-3 text-white font-bold text-xl"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={pickImage}
                className="w-3/5 border border-white items-center justify-center rounded-sm h-64">
                <Ionicons name="image-outline" size={24} color="white" />
                <Text
                  className="text-white mt-2"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  Upload Photo
                </Text>
              </TouchableOpacity>
            )}
            {video ? (
              <TouchableOpacity className="w-2/5  border border-white relative rounded-sm h-64">
                <Image
                  source={{ uri: video }}
                  resizeMode="contain"
                  className="w-full  self-center rounded-sm bg-black"
                />
                <Text
                  onPress={() => {
                    setVideo(null);
                  }}
                  className="bg-red-600 w-fit absolute top-3 right-4 rounded-sm p-1 px-3 text-white font-bold text-xl"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={pickVideo}
                className="w-2/5 h-64 border border-white items-center justify-between rounded-sm px-2 py-2"
                style={{
                  backgroundColor: "transparent",
                }}>
                <View></View>
                <View className="items-center justify-center">
                  <Ionicons name="film-outline" size={28} color="white" />
                  <Text
                    className="text-white mt-2 text-center"
                    style={{
                      fontFamily: "HelveticaNeue-Medium",
                      fontSize: 14,
                    }}>
                    Upload{"\n"}Reel
                  </Text>
                </View>
                <View className="items-center justify-center">
                  <Text className="text-white mt-4">or</Text>

                  <TouchableOpacity className="border border-white px-3 py-1 mt-2 rounded-sm">
                    <Text
                      className="text-white"
                      style={{
                        fontFamily: "HelveticaNeue-Medium",
                        fontSize: 13,
                      }}>
                      Choose a reel
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <View className="px-6">
            {/* Display additional photos */}
            {additionalImages.map((uri, index) => (
              <View
                key={index}
                className="flex-row justify-between space-x-2 mb-4 h-50">
                <TouchableOpacity className="flex-1  border border-white relative rounded-md h-50">
                  <Image
                    source={{ uri }}
                    resizeMode="contain"
                    className="w-full h-50  self-center rounded-md bg-black"
                  />
                  <Text
                    onPress={() => {
                      setAdditionalImages((prev) =>
                        prev.filter((image) => {
                          return image !== uri;
                        })
                      );
                    }}
                    className="bg-red-600 w-fit absolute top-3 right-4 rounded-md p-1 px-3 text-white font-bold text-xl"
                    style={{
                      fontFamily: "HelveticaNeue-Medium",
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
            ))}

            {/* Add Another Photo */}
            <TouchableOpacity
              onPress={addAnotherPhoto}
              className="border border-dashed border-white py-3 rounded-md mb-4 items-center">
              <Text
                className="text-white"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Add another photo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row justify-between items-center py-3"
              onPress={() => setBrandModal(true)}>
              <Text
                className="text-white"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Brand
              </Text>
              <View className="flex-row items-center gap-2">
                <Text
                  className="text-typography-500 text-sm"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  {selectedBrand}
                </Text>
                <Ionicons name="chevron-forward" size={18} color="white" />
              </View>
            </TouchableOpacity>
            <BrandModal
              brandModal={brandmodal}
              selectedBrand={selectedBrand}
              setBrandModal={setBrandModal}
              setSelectedBrand={setSelectedBrand}
            />
            <TouchableOpacity
              className="flex-row justify-between items-center py-4"
              onPress={() => setCategoryModal(true)}>
              <Text
                className="text-white"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Category
              </Text>
              <View className="flex-row items-center gap-2">
                <Text
                  className="text-typography-500 text-sm"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  {selectedCategory.length}
                </Text>
                <Ionicons name="chevron-forward" size={18} color="white" />
              </View>
            </TouchableOpacity>
            <CategoryModal
              categoryModal={categorymodal}
              selectedCategory={selectedCategory}
              setCategoryModal={setCategoryModal}
              setSelectedCategory={setSelectedCategory}
            />
            <View className="py-2">
              <Text
                className="text-white mb-2"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                  fontSize: 14,
                }}>
                Product Name
              </Text>

              <TextInput
                placeholder="ENTER AN ENGAGING NAME"
                placeholderTextColor="#888"
                className="border border-white rounded-sm px-4 pt-3 text-white"
                style={{
                  fontSize: 20,
                }}
                ref={(ref) =>
                  ref &&
                  ref.setNativeProps({
                    style: { fontFamily: "PPFormulaCondensed-Bold" },
                  })
                }
              />
            </View>

            <View className="flex-row justify-between items-center py-2">
              <Text
                className="text-white"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Original Price
              </Text>
              <View className="flex-row items-center gap-2">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  ₹
                </Text>
                <TextInput
                  keyboardType="numeric"
                  className=" text-white w-16 text-center rounded-sm border border-white"
                  placeholder="0000"
                  placeholderTextColor="#888"
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    })
                  }
                  style={{
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
              <Text
                className="text-white"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Discounted Price
              </Text>
              <View className="flex-row items-center gap-2">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  ₹
                </Text>
                <TextInput
                  keyboardType="numeric"
                  className=" text-white w-16 text-center rounded-sm border border-white"
                  placeholder="0000"
                  placeholderTextColor="#888"
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    })
                  }
                  style={{
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
              <Text
                className="text-white"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                No. of Pieces
              </Text>
              <View className="flex-row items-center gap-2">
                <TextInput
                  keyboardType="numeric"
                  className=" text-white w-16 text-center rounded-sm border border-white"
                  placeholder="01"
                  maxLength={2}
                  placeholderTextColor="#888"
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Regular" },
                    })
                  }
                  style={{
                    fontSize: 15,
                  }}
                  value={pieces ?? ""}
                  onChangeText={(text) => {
                    setPieces(text);
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              className="flex-row justify-between items-center py-5"
              onPress={() => setProductConditionModal(true)}>
              <Text
                className="text-white"
                style={{
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                Product Condition
              </Text>
              <View className="flex-row items-center gap-2">
                <Text
                  className="text-typography-500 text-sm"
                  style={{
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  {selectedProductCondition}
                </Text>
                <Ionicons name="chevron-forward" size={18} color="white" />
              </View>
            </TouchableOpacity>
            <ProductConditionModal
              productConditionModal={productConditionmodal}
              setProductConditionModal={setProductConditionModal}
              selectedProductCondition={selectedProductCondition}
              setSelectedProductCondition={setSelectedProductCondition}
              conditionDescription={conditionDescription}
              setConditionDescription={setConditionDescription}
            />
            <Divider />
            <View className="mb-10">
              <Accordion
                size="md"
                variant="filled"
                type="single"
                isCollapsible={true}
                isDisabled={false}
                className="w-[100%]">
                <AccordionItem value="a">
                  <AccordionHeader className="bg-[#161616]">
                    <AccordionTrigger>
                      {({ isExpanded }) => {
                        return (
                          <>
                            <AccordionTitleText
                              className="text-white text-lg"
                              style={{
                                fontFamily: "HelveticaNeue-Medium",
                              }}>
                              Add Additional Details
                            </AccordionTitleText>
                            {isExpanded ? (
                              <AccordionIcon
                                as={RemoveIcon}
                                className="ml-3"
                                color="white"
                                size="xl"
                              />
                            ) : (
                              <AccordionIcon
                                as={AddIcon}
                                className="ml-3"
                                color="white"
                                size="xl"
                              />
                            )}
                          </>
                        );
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent className="bg-[#161616]">
                    <View className="gap-2 py-1">
                      <Text
                        className="text-white mb-1"
                        style={{
                          fontFamily: "HelveticaNeue-Medium",
                        }}>
                        Design Description
                      </Text>
                      <TextInput
                        multiline
                        className=" text-white px-3 py-3 rounded h-fit border border-white"
                        placeholder="DESCRIBE THE DESIGN"
                        placeholderTextColor="#888"
                        placeholderClassName=""
                        ref={(ref) =>
                          ref &&
                          ref.setNativeProps({
                            style: { fontFamily: "PPFormulaCondensed-Regular" },
                          })
                        }
                        style={{
                          fontSize: 18,
                        }}
                        value={description ?? ""}
                        onChangeText={(text) => {
                          setDescription(text);
                        }}
                      />
                    </View>
                    <TouchableOpacity
                      className="flex-row justify-between items-center py-3"
                      onPress={() => setPrimaryMaterialModal(true)}>
                      <Text
                        className="text-white"
                        style={{
                          fontFamily: "HelveticaNeue-Medium",
                        }}>
                        Primary Material
                      </Text>
                      <View className="flex-row items-center gap-2">
                        <Text
                          className="text-typography-500 text-sm"
                          style={{
                            fontFamily: "HelveticaNeue-Medium",
                          }}>
                          {selectedPrimaryMaterial}
                        </Text>
                        <Ionicons
                          name="chevron-forward"
                          size={18}
                          color="white"
                        />
                      </View>
                    </TouchableOpacity>
                    <PrimaryMaterialModal
                      primaryMaterialModal={primaryMaterialModal}
                      setPrimaryMaterialModal={setPrimaryMaterialModal}
                      selectedPrimaryMaterial={selectedPrimaryMaterial}
                      setSelectedPrimaryMaterial={setSelectedPrimaryMaterial}
                    />
                    <TouchableOpacity
                      className="flex-row justify-between items-center py-3"
                      onPress={() => setPrimaryColorModal(true)}>
                      <Text
                        className="text-white"
                        style={{
                          fontFamily: "HelveticaNeue-Medium",
                        }}>
                        Primary Color
                      </Text>
                      <View className="flex-row items-center gap-2">
                        <Text
                          className="text-typography-500 text-sm"
                          style={{
                            fontFamily: "HelveticaNeue-Medium",
                          }}>
                          {selectedPrimaryColor}
                        </Text>
                        <Ionicons
                          name="chevron-forward"
                          size={18}
                          color="white"
                        />
                      </View>
                    </TouchableOpacity>
                    <PrimaryColorModal
                      primaryColorModal={primaryColorModal}
                      setPrimaryColorModal={setPrimaryColorModal}
                      selectedPrimaryColor={selectedPrimaryColor}
                      setSelectedPrimaryColor={setSelectedPrimaryColor}
                    />
                    <TouchableOpacity
                      className="flex-row justify-between items-center py-3"
                      onPress={() => setOccasionModal(true)}>
                      <Text
                        className="text-white"
                        style={{
                          fontFamily: "HelveticaNeue-Medium",
                        }}>
                        Occasion
                      </Text>
                      <View className="flex-row items-center gap-2">
                        <Text
                          className="text-typography-500 text-sm"
                          style={{
                            fontFamily: "HelveticaNeue-Medium",
                          }}>
                          {selectedOccasion}
                        </Text>
                        <Ionicons
                          name="chevron-forward"
                          size={18}
                          color="white"
                        />
                      </View>
                    </TouchableOpacity>
                    <OccasionModal
                      occasionModal={occasionModal}
                      setOccasionModal={setOccasionModal}
                      selectedOccasion={selectedOccasion}
                      setSelectedOccasion={setSelectedOccasion}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </View>
          </View>
        </ScrollView>

        {/* Publish Button */}
        <TouchableOpacity
          className="bg-[#E5FF03] py-2 m-2 rounded-sm shadow-lg shadow-slate-50 items-center"
          onPress={() => {
            if (validateForm()) {
              const product = {
                image,
                video,
                additionalImages,
                selectedBrand,
                selectedCategory,
                originalPrice,
                discountedPrice,
                pieces,
                description,
                selectedProductCondition,
                selectedPrimaryMaterial,
                selectedPrimaryColor,
                selectedOccasion,
                productName,
              };
              saveProductToFile(product);
            }
          }}>
          <Text
            className="text-black"
            style={{
              fontFamily: "PPFormulaCondensed-Bold",
              fontSize: 34,
            }}>
            PUBLISH
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddProduct;
