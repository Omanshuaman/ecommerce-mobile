import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
  ImageBackground, // Added import
  FlatList,
  Dimensions,
  BackHandler,
} from "react-native";
import { ResizeMode, Video } from "expo-av";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Select,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from "@/components/ui/accordion";
import { RemoveIcon, AddIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { backState, useProduct } from "@/store/productStore";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [filteredProduct, setFilteredProduct] = useState<any | null>(null);
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const setBack = backState((state: any) => state.setBack); // ✅ HOOK CALL HERE

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const value = await AsyncStorage.getItem("myData");
        if (value !== null) {
          const products = JSON.parse(value);

          const product = products.find((p: any) => p.id === parseInt(id));
          setFilteredProduct(product);
        }
      } catch (e) {
        console.log("Error loading product:", e);
      }
    };

    fetchProduct();
  }, [id]);
  const products = useProduct((state: any) => state.addProduct);
  useEffect(() => {
    const backAction = () => {
      setBack(0);
      router.back();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const addProduct = () => {
    products(filteredProduct);
  };

  if (!filteredProduct) {
    return (
      <Box className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#fff" />
      </Box>
    );
  }
  console.log(filteredProduct.image);
  return (
    <ImageBackground
      source={require("../../assets/bg-image.jpg")}
      style={{ flex: 1, paddingTop: 50 }} // Add padding to avoid overlap with the header
      resizeMode="cover">
      <SafeAreaView className="flex-1">
        <ScrollView className="px-4 py-6">
          <View className="relative">
            <FlatList
              data={[
                { type: "image", uri: filteredProduct.image },
                ...filteredProduct.mediaFiles,
              ]}
              horizontal
              pagingEnabled
              centerContent
              showsHorizontalScrollIndicator={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.type === "image") {
                  return (
                    <Image
                      source={{ uri: item.uri }}
                      className="w-full mb-4 h-96"
                      style={{ width: Dimensions.get("window").width - 40 }}
                      resizeMode="cover"
                    />
                  );
                } else if (item.type === "video") {
                  return (
                    <Video
                      source={{ uri: item.uri }}
                      style={{
                        width: Dimensions.get("window").width - 40,
                        height: 384,
                      }}
                      resizeMode={ResizeMode.COVER}
                      useNativeControls
                      isLooping
                    />
                  );
                }
                return null;
              }}
            />

            {/* Absolute Tags */}
            <View className="absolute bottom-6 left-2 flex-row items-center space-x-1 gap-1">
              <Text
                className="bg-[#E5FF03] text-black text-2xl px-2 pt-0.5 border border-gray-800 shadow-lg shadow-gray-950"
                style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 20 }}>
                OBSESSED
              </Text>
              <Text className="text-xl bg-white text-black font-normal px-2 py-0.5 border border-gray-800 rounded-sm">
                Like new
              </Text>
            </View>
          </View>

          {/* Title */}
          <Text
            className="text-white uppercase"
            style={{
              fontFamily: "PPFormulaCondensed-Bold",
              fontSize: 40,
            }}>
            {filteredProduct.productName}
          </Text>

          {/* Price Row */}
          <Box className="flex-row items-center gap-2">
            <Text className="text-xl text-white font-bold">
              ₹{filteredProduct.discountedPrice}
            </Text>
            <Text className="text-lg text-gray-400 line-through">
              ₹{filteredProduct.originalPrice}
            </Text>
          </Box>

          {/* Description */}
          <Text className="text-white text-base mt-2">
            {filteredProduct.description}
          </Text>

          {/* Seller Info */}
          <Box className="flex-row justify-between items-center mt-3 mb-4">
            <View className="flex-row justify-between items-center gap-2">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/1.jpg",
                }}
                className="size-8 rounded-full"
              />
              <Text
                className="text-white text-base"
                style={{ fontFamily: "HelveticaNeue-Medium" }}>
                Samuil Sadovsky
              </Text>
            </View>

            <Text className="text-white font-medium text-base">
              {filteredProduct.pieces} Pieces left
            </Text>
          </Box>

          <View className="border border-white rounded-sm mt-1 mb-16">
            {/* Available Colors */}
            <View
              className="flex-row justify-between items-center px-4 py-5"
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                borderStyle: "dashed",
              }}>
              <Text
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "HelveticaNeue-Medium" }}>
                Available Colors
              </Text>
              <View
                className="w-6 h-6 rounded-sm"
                style={{
                  backgroundColor:
                    filteredProduct.selectedPrimaryColor.toLowerCase(),
                }}
              />
            </View>

            {/* Size */}
            <View
              className="flex-row justify-between items-center px-4 py-5"
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                borderStyle: "dashed",
              }}>
              <Text
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "HelveticaNeue-Medium" }}>
                Size
              </Text>
              <Text
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "HelveticaNeue-Medium" }}>
                Medium
              </Text>
            </View>
            <Accordion
              size="md"
              variant="filled"
              type="single"
              isCollapsible={true}
              isDisabled={false}
              className="w-[100%]">
              <AccordionItem value="a">
                <AccordionHeader
                  className="bg-[#161616] py-2"
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    borderStyle: "dashed",
                  }}>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <Text
                            className="text-white font-semibold text-lg"
                            style={{ fontFamily: "HelveticaNeue-Medium" }}>
                            Details
                          </Text>
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
                  <AccordionContentText className="text-white">
                    To place an order, simply select the products you want,
                    proceed to checkout, provide shipping and payment
                    information, and finalize your purchase.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionHeader
                  className="bg-[#161616] py-2"
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    borderStyle: "dashed",
                  }}>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <Text
                            className="text-white font-semibold text-lg"
                            style={{ fontFamily: "HelveticaNeue-Medium" }}>
                            Offers
                          </Text>
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
                  <AccordionContentText className="text-white">
                    To place an order, simply select the products you want,
                    proceed to checkout, provide shipping and payment
                    information, and finalize your purchase.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </View>
        </ScrollView>
        {/* Action Buttons */}
        <Box className="flex-row gap-2 p-2">
          <TouchableOpacity
            className="flex-1 border border-white bg-transparent justify-center items-center py-1 rounded-sm  "
            onPress={() => setShowActionsheet(true)}>
            <Text
              className="text-white"
              style={{
                fontFamily: "PPFormulaCondensed-Bold",
                fontSize: 36,
              }}>
              UNPUBLISH
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push(`/creator-store/edit-product`);
              addProduct();
            }}
            className="flex-1 bg-[#E5FF03] justify-center items-center py-1 rounded-sm shadow-lg shadow-white ">
            <Text
              className="text-black"
              style={{
                fontFamily: "PPFormulaCondensed-Bold",
                fontSize: 36,
              }}>
              EDIT PRODUCT
            </Text>
          </TouchableOpacity>
        </Box>
        <Select className="">
          <SelectPortal isOpen={showActionsheet} onClose={handleClose}>
            <SelectBackdrop />
            <SelectContent className="bg-black border border-dashed p-4">
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <Text
                className="text-white py-2"
                style={{ fontSize: 15, fontFamily: "HelveticaNeue-Medium" }}>
                Are you sure you want to unpublish?
              </Text>
              <Text
                className=" text-typography-400 pb-6 text-center "
                style={{ fontSize: 14, fontFamily: "HelveticaNeue-Light" }}>
                Unpublishing will remove it from people who have added it to
                their bag
              </Text>
              <TouchableOpacity className="bg-black py-2 border border-white items-center shadow-lg shadow-slate-50 rounded-sm w-full">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 36,
                  }}>
                  UNPUBLISH
                </Text>
              </TouchableOpacity>

              {/* Update Button */}
              <TouchableOpacity className="bg-[#E5FF03] py-1 mt-3 items-center shadow-lg shadow-slate-50 rounded-sm w-full">
                <Text
                  className="text-black"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 36,
                  }}>
                  CANCEL
                </Text>
              </TouchableOpacity>
            </SelectContent>
          </SelectPortal>
        </Select>
      </SafeAreaView>
    </ImageBackground>
  );
}
