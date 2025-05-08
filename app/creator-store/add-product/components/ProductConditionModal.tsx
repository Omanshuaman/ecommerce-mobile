import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Text } from "@/components/ui/text";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { Ionicons } from "@expo/vector-icons"; // For back arrow and checkmark

import React, { useEffect, useState } from "react";
import {
  Image,
  TextInput,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Div } from "@expo/html-elements";
import { Divider } from "react-native-paper";
const API_ENDPOINT = "https://randomuser.me/api/?results=50";
const ProductConditions = ["New", "Like New", "Used", "Worn"];

interface ProductConditionModalProps {
  selectedProductCondition: string | null;
  setSelectedProductCondition: (ProductCondition: string) => void;
  productConditionModal: boolean;
  setProductConditionModal: (modalState: boolean) => void;
  conditionDescription: string;
  setConditionDescription: (desc: string) => void;
}

const ProductConditionModal = ({
  selectedProductCondition,
  setSelectedProductCondition,
  productConditionModal,
  setProductConditionModal,
  conditionDescription,
  setConditionDescription,
}: ProductConditionModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(ProductConditions);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setData(
      ProductConditions.filter((condition) =>
        condition.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <Center className="h-fit">
        <Modal
          isOpen={productConditionModal}
          closeOnOverlayClick={false}
          onClose={() => setProductConditionModal(false)}
          size="full">
          <ImageBackground
            source={require("../../../../assets/bg-image.jpg")}
            style={{ flex: 1 }}
            resizeMode="cover">
            <ModalBackdrop />
            <ModalContent className="h-full bg-transparent border border-transparent">
              <View className="flex-row items-center justify-between px-2 mb-2">
                <TouchableOpacity
                  onPress={() => {
                    setProductConditionModal(false);
                  }}>
                  <Ionicons name="chevron-back" size={18} color="white" />
                </TouchableOpacity>

                <Text
                  className="text-white text-center"
                  style={{
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 18,
                  }}>
                  Product Condition
                </Text>

                {/* Invisible placeholder for spacing */}
                <View style={{ width: 20 }} />
              </View>
              <ModalHeader>
                <View className="bg-black border border-white rounded-sm mb-2 my-4 px-3 flex-row items-center justify-center w-full">
                  <Ionicons
                    name="search"
                    size={16}
                    color="#A0AEC0"
                    className="mr-2"
                  />
                  <TextInput
                    placeholder="Search Product Condition"
                    placeholderTextColor="#A0AEC0"
                    className=" text-white "
                    onChangeText={handleSearch}
                  />
                </View>
                <ModalCloseButton>
                  <Icon as={CloseIcon} size="md" />
                </ModalCloseButton>
              </ModalHeader>

              <ModalBody className="px-0">
                <ScrollView showsVerticalScrollIndicator={false}>
                  {data.map((condition) => (
                    <TouchableOpacity
                      key={condition}
                      className="py-3 px-2"
                      onPress={() => setSelectedProductCondition(condition)}>
                      <View
                        key={condition}
                        className="flex-row justify-between items-center bg-transparent">
                        <View>
                          <Text
                            className="text-white text-base"
                            style={{
                              fontFamily: "HelveticaNeue-Bold",
                              fontSize: 15,
                            }}>
                            {condition}
                          </Text>
                          <Text
                            className="text-gray-400 text"
                            style={{
                              fontFamily: "HelveticaNeue-Light",
                              fontSize: 14,
                            }}>
                            You can choose multiple categories
                          </Text>
                        </View>

                        {selectedProductCondition === condition && (
                          <Ionicons name="checkmark" size={20} color="white" />
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                  <Divider />
                  <View className="mt-5">
                    <Text
                      className="text-gray-200 mb-2"
                      style={{
                        fontFamily: "HelveticaNeue-Medium",
                        fontSize: 13,
                      }}>
                      Condition Description
                    </Text>
                    <TextInput
                      multiline
                      numberOfLines={4}
                      placeholder="DESCRIBE THE CONDITION"
                      style={{
                        fontSize: 24,
                      }}
                      ref={(ref) => {
                        if (ref) {
                          ref.setNativeProps({
                            style: { fontFamily: "PPFormulaCondensed-Bold" },
                          });
                        }
                      }}
                      placeholderTextColor="#888"
                      onChangeText={setConditionDescription}
                      className="border border-gray-600 text-white p-2 rounded-md"
                    />
                  </View>
                </ScrollView>
              </ModalBody>

              <ModalFooter>
                <Button
                  className="bg-[#E5FF03] w-full h-[52px] rounded-sm shadow-lg shadow-slate-50"
                  onPress={() => setProductConditionModal(false)}>
                  <ButtonText
                    className="text-black"
                    style={{
                      fontFamily: "PPFormulaCondensed-Bold",
                      fontSize: 36,
                      paddingTop: 30,
                    }}>
                    SAVE
                  </ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </ImageBackground>
        </Modal>
      </Center>
    </SafeAreaView>
  );
};

export default ProductConditionModal;
