import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  Image as RNImage,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Plus } from "lucide-react-native"; // or use Ionicons if preferred
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
  RemoveIcon,
  AddIcon,
} from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { useCart } from "@/store/cartStore";
import { Divider } from "react-native-paper";

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
          const product = products.find((p: any) => p.originalPrice === id); // replace with p.image === id if using image as identifier
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
    <SafeAreaView className="flex-1 bg-[#161616]">
      <ScrollView className="px-4 py-6">
        <View className="relative">
          <Image
            source={{ uri: filteredProduct.image }}
            className="w-full mb-4 h-96"
            resizeMode="cover"
          />

          {/* Absolute Tags */}
          <View className="absolute bottom-6 left-2 flex-row items-center space-x-1 gap-1  ">
            <Text
              className="bg-yellow-400 text-black text-2xl px-2 pt-0.5 border border-gray-800 shadow-lg shadow-gray-950"
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
          {filteredProduct.selectedBrand}
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
                  proceed to checkout, provide shipping and payment information,
                  and finalize your purchase.
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
                  proceed to checkout, provide shipping and payment information,
                  and finalize your purchase.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </View>
      </ScrollView>
      {/* Action Buttons */}
      <Box className="flex-row gap-2 p-2">
        <TouchableOpacity className="flex-1 border border-white bg-transparent justify-center items-center py-1 rounded-sm  ">
          <Text
            className="text-white"
            style={{
              fontFamily: "PPFormulaCondensed-Bold",
              fontSize: 36,
            }}>
            UNPUBLISH
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-yellow-400 justify-center items-center py-1 rounded-sm shadow-lg shadow-white ">
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
    </SafeAreaView>
  );
}
